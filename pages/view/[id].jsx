import Layout from "../../components/Layout.jsx";
import WordContainer from "../../components/word/WordContainer.jsx";
import { getAllIds } from "../../lib/view.js";
import WordListButton from "../../components/WordListButton.jsx";
import AddIcon from "../../components/icons/AddIcon.jsx";
import { useEffect, useState, useRef } from "react";

import { envVar } from "../../next.config.js";

export default function View({ id }) {
    const [data, setData] = useState(null);
    const initialRef = useRef(false);
    useEffect(() => {
        async function fetchData(id) {
            // Fetch necessary data for the blog post using params.id
            initialRef.current = true;

            const headers = {
                apikey: envVar.key,
                Authorization: envVar.auth,
                "Content-Type": "application/json",
            };

            fetch(
                `https://wedfhdkwmzdpwjclumxq.supabase.co/rest/v1/dict?id=eq.${id}`,
                { headers }
            )
                .then((res) => {
                    if (!res.ok) {
                        throw new Error(`HTTP error! Status: ${res.status}`);
                    }
                    return res.json();
                })
                .then((json) => setData(JSON.parse(json[0].content)));
        }
        fetchData(id);
    }, [id]);

    const handleOnClick = () => {
        const key = word.Id.toString();
        if (!sessionStorage.getItem(key)) {
            sessionStorage.setItem(key, JSON.stringify({ item: word }));
        } else {
            window.alert("Word has already been added.");
        }
    };

    return (
        <Layout>
            <div className="content-container">
                <div className="content-container__body--view">
                    {!!data && (
                        <WordContainer
                            detail={true}
                            last={true}
                            data={{ item: data }}
                            keyword={null}
                        >
                            <div style={{ margin: "1rem 0 1rem 0" }}>
                                <WordListButton
                                    handleOnClick={handleOnClick}
                                    content={"Add to Wordlist"}
                                >
                                    <AddIcon />
                                </WordListButton>
                            </div>
                        </WordContainer>
                    )}
                </div>
            </div>
        </Layout>
    );
}

export async function getStaticPaths() {
    const paths = await getAllIds();
    return {
        paths,
        fallback: "blocking",
    };
}

export async function getStaticProps(context) {
    const id = context.params.id;
    return { props: { id } };
}
