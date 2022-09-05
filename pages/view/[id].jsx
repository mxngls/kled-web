import Layout from "../../components/Layout.jsx";
import WordContainer from "../../components/word/WordContainer.jsx";
import { getAllIds } from "../../lib/view.js";
import WordListButton from "../../components/WordListButton.jsx";
import AddIcon from "../../components/icons/AddIcon.jsx";

import { env } from "../../next.config.js";

export default function View({ word }) {
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
                    {!!word && (
                        <WordContainer
                            detail={true}
                            last={true}
                            data={{ item: word }}
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
    async function fetchData(id) {
        // Fetch necessary data for the blog post using params.id

        const headers = {
            apikey: env.key,
            Authorization: env.auth,
            "Content-Type": "application/json",
        };

        return fetch(
            `https://wedfhdkwmzdpwjclumxq.supabase.co/rest/v1/dict?id=eq.${id}`,
            { headers }
        ).then((res) => {
            if (!res.ok) {
                throw new Error(`HTTP error! Status: ${res.status}`);
            }
            return res.json();
        });
    }
    const word = await fetchData(id).then((json) =>
        JSON.parse(json[0].content)
    );

    return { props: { word } };
}
