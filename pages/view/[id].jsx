import Layout from "../../components/Layout.jsx";
import WordContainer from "../../components/word/WordContainer.jsx";
import { getAllIds } from "../../lib/view.js";
import WordListButton from "../../components/WordListButton.jsx";
import AddIcon from "../../components/icons/AddIcon.jsx";

import { useRouter } from "next/router.js";
import batchOne from "../../data/dict_FULL_batch_1.json";
import batchSecond from "../../data/dict_FULL_batch_2.json";

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
    const sortedIdsA = batchOne.sort((a, b) => a.Id - b.Id);
    const sortedIdsB = batchSecond.sort((a, b) => a.Id - b.Id);
    const id = parseInt(context.params.id, 10);

    async function getWord(sortedIds, id) {
        let low = 0;
        let high = sortedIds.length - 1;
        while (low <= high) {
            if (id > sortedIds[high]) {
                return null;
            }
            let mid = Math.floor((low + high) / 2);
            if (sortedIds[mid].Id < id) {
                low = mid + 1;
            } else if (sortedIds[mid].Id > id) {
                high = mid - 1;
            } else {
                return sortedIds[mid];
            }
        }
        return null;
    }

    try {
        let word = await getWord(sortedIdsA, id);
        if (word === null) {
            word = await getWord(sortedIdsB, id);
        }
        if (word !== null) {
            return { props: { word }, revalidate: 1 };
        } else {
            return { notFound: true };
        }
    } catch (err) {
        console.log(err);
    }
}
