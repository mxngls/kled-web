import Layout from "../../../components/Layout.jsx";
import ContentContainer from "../../../components/content/ContentContainer.jsx";

import { env } from "../../../next.config.js";
import { useRouter } from "next/router.js";
import { useEffect, useState } from "react";

import { SpinnerCircularFixed } from "spinners-react";

export default function Results({ db, setDb, objects }) {
    const router = useRouter();
    const [words, setWords] = useState({
        words: null,
        keyword: router.query.keyword,
    });

    useEffect(() => {
        const handleRouteChange = () => {
            setWords({ words: null, keyword: router.query.keyword });
        };

        router.events.on("routeChangeStart", handleRouteChange);

        return () => {
            router.events.off("routeChangeStart", handleRouteChange);
        };
    }, []);

    useEffect(() => {
        console.log("Rendered page");
        async function fetchSearchData(keyword, matchType) {
            // Fetch data from external database
            const headers = {
                apikey: env.key,
                Authorization: env.auth,
                "Content-Type": "application/json",
            };

            const data = JSON.stringify({ term: keyword });

            const res = await fetch(
                `https://wedfhdkwmzdpwjclumxq.supabase.co/rest/v1/rpc/search_${matchType}`,
                { method: "POST", headers: headers, body: data }
            );

            const json = await res.json();
            if (json !== null) {
                setWords({
                    words: json,
                    keyword: keyword,
                });
            } else setWords("notFound");
        }
        console.log(words);
        console.log(router.query);
        if (router.isReady)
            fetchSearchData(router.query.keyword, router.query.matchType);
    }, [router.query.keyword]);

    if (words.words === null) {
        return (
            <>
                <Layout
                    db={db}
                    setDb={setDb}
                    objects={objects}
                    keyword={router}
                >
                    <div
                        style={{
                            height: "100%",
                            display: "flex",
                            justifyContent: "center"
                        }}
                    >
                        <SpinnerCircularFixed
                            size={115}
                            color={"#209be0"}
                            secondaryColor={"#eaecef"}
                            speed={140}
                        />
                    </div>
                </Layout>
            </>
        );
    } else if (words === "notFound") {
        router.replace("/404", router.asPath);
    } else {
        return (
            <>
                <Layout db={db} setDb={setDb} objects={objects}>
                    <ContentContainer
                        search={true}
                        data={words.words}
                        keyword={words.keyword}
                        resNum={words.words.length}
                    />
                </Layout>
            </>
        );
    }
}
