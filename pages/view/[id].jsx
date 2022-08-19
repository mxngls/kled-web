import Layout from "../../components/Layout.jsx";
import WordContainer from "../../components/word/WordContainer.jsx";
import { getAllIds } from "../../lib/view.js";
import WordListButton from "../../components/WordListButton.jsx";
import AddIcon from "../../components/icons/AddIcon.jsx";

import { useRouter } from "next/router.js";

export default function View({ word }) {
    const router = useRouter();
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
    // Fetch necessary data for the blog post using params.id
    const headers = {
        apikey: process.env.SUPABASE_APIKEY,
        Authorization: process.env.SUPABASE_AUTH,
        "Content-Type": "application/json",
    };
    const word = await fetch(
        `https://wedfhdkwmzdpwjclumxq.supabase.co/rest/v1/dict?id=eq.${context.params.id}`,
        { headers }
    )
        .then((res) => res.json())
        .then((json) => JSON.parse(json[0].content));

    try {
        if (word !== undefined) {
            return { props: { word } };
        } else {
            return { notFound: true };
        }
    } catch (err) {
        console.log(err);
    }
}
