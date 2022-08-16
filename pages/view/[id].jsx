import Layout from "../../components/Layout.jsx";
import WordContainer from "../../components/word/WordContainer.jsx";
import { getAllIds, getWord } from "../../lib/view.js";
import WordListButton from "../../components/WordListButton.jsx";
import AddIcon from "../../components/icons/AddIcon.jsx";
import { useRouter } from "next/router.js";

export default function View({ word }) {
    const router = useRouter()
    const handleOnClick = () => {
        const key = word.Id.toString();
        if (!sessionStorage.getItem(key)) {
            sessionStorage.setItem(key, JSON.stringify({ item: word }));
        } else {
            window.alert("Word has already been added.");
        }
    };

    // If the page is not yet generated, this will be displayed
    // initially until getStaticProps() finishes running
    if (router.isFallback) {
        return (
            <Layout>
                <div className="content-container">
                    <h1>Loading...</h1>
                </div>
            </Layout>
        );
    }

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
        fallback: true,
    };
}

export async function getStaticProps({ params }) {
    // Fetch necessary data for the blog post using params.id
    const id = Number(params.id);
    const word = await getWord(id);

    if (!!word) {
        return { props: { word }, revalidate: 60 };
    } else {
        return { notFound: true };
    }
}
