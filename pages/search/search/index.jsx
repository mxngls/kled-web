import Layout from "../../../components/Layout.jsx";
import ContentContainer from "../../../components/content/ContentContainer.jsx";

import { env } from "../../../next.config.js";
import { useRouter } from "next/router.js";
import { useEffect, useState, useRef } from "react";

import { SpinnerCircularFixed } from "spinners-react";

export default function Results() {
    const abortController = useRef();
    const router = useRouter();
    const [data, setData] = useState({
        words: null,
        keyword: router.query.keyword,
    });

    useEffect(() => {
        const handleRouteChange = () => {
            setData({ words: null, keyword: router.query.keyword });
        };

        router.events.on("routeChangeStart", handleRouteChange);

        return () => {
            router.events.off("routeChangeStart", handleRouteChange);
        };
    }, []);

    useEffect(() => {
        async function fetchSearchData(keyword, matchType) {
            // Fetch data from external database
            const headers = {
                apikey: env.key,
                Authorization: env.auth,
                "Content-Type": "application/json",
            };

            const data = JSON.stringify({ term: keyword });

            // Cancel active fetch when there is a new request
            if (abortController.current) {
                abortController.current.abort();
            }

            abortController.current = new AbortController();
            const { signal } = abortController.current;

            try {
                const res = await fetch(
                    `https://wedfhdkwmzdpwjclumxq.supabase.co/rest/v1/rpc/search_${matchType}`,
                    {
                        method: "POST",
                        headers: headers,
                        body: data,
                        signal: signal,
                    }
                );

                const json = await res.json();
                if (json !== null) {
                    setData({
                        words: json,
                        keyword: keyword,
                    });
                } else setData("notFound");
            } catch (error) {
                if (!error instanceof DOMException) {
                    console.log(error);
                }
            }
        }

        if (router.isReady)
            fetchSearchData(router.query.keyword, router.query.matchType);

        return () => {};
    }, [router.query.keyword, router.isReady]);

    if (data.words === null) {
        return (
            <Layout>
                <div
                    style={{
                        height: "100%",
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <SpinnerCircularFixed
                        size={115}
                        color={"black"}
                        secondaryColor={"lightGrey"}
                        speed={140}
                    />
                </div>
            </Layout>
        );
    } else if (data === "notFound") {
        router.replace("/404", router.asPath);
    } else {
        return (
            <Layout>
                <ContentContainer search={true} data={data} setData={setData} />
            </Layout>
        );
    }
}
