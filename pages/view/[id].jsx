import Layout from "../../components/Layout.jsx";
import WordContainer from "../../components/word/WordContainer.jsx";
import { getAllIds, getData } from "../../lib/view.js";
import WordListButton from "../../components/WordListButton.jsx";
import AddIcon from "../../components/icons/AddIcon.jsx";

export default function View({ data }) {
    const handleOnClick = () => {
        const key = data.Id.toString();
        if (!sessionStorage.getItem(key)) {
            sessionStorage.setItem(key, JSON.stringify({ item: data }));
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

export async function getStaticProps({ params }) {
    // Fetch necessary data for the blog post using params.id
    const data = getData(params.id);
    if (data === "") {
        return { notFound: true };
    } else
        return {
            props: {
                data,
            },
        };
}
