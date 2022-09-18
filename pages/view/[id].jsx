import Layout from "../../components/Layout.jsx";
import WordContainer from "../../components/word/WordContainer.jsx";
import WordListButton from "../../components/wordlist/WordListButton.jsx";
import AddIcon from "../../components/icons/AddIcon.jsx";

import { fetchViewData, getMostFrequent } from "../../lib/view.js";

import { SpinnerCircularFixed } from "spinners-react";

export default function View({ word }) {

    const handleOnClick = () => {
        const key = word.Id.toString();
        if (!sessionStorage.getItem(key)) {
            sessionStorage.setItem(key, JSON.stringify({ item: word }));
            window.alert("Added word to wordlist.");
        } else {
            window.alert("Word has already been added.");
        }
    };

    if (word === null) {
        return (
            <Layout>
                <div className="content-container">
                    <div className="content-container__body--view">
                        <div
                            style={{
                                height: "100%",
                                display: "flex",
                                justifyContent: "flex-start",
                            }}
                        >
                            <SpinnerCircularFixed
                                size={115}
                                color={"black"}
                                secondaryColor={"lightGrey"}
                                speed={140}
                            />
                        </div>
                    </div>
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
    const paths = await getMostFrequent();
    return {
        paths,
        fallback: "blocking",
    };
}

export async function getStaticProps(context) {
    const word = await fetchViewData(Number(context.params.id));

    if (word === null) {
        return { notFound: true };
    }

    return { props: { word } };
}
