import Layout from "../../../components/Layout.jsx";
import ContentContainer from "../../../components/content/ContentContainer.jsx";
import { fetchSearchData } from "../../../lib/search.js";

export default function Results({ words, db, setDb, objects }) {
    return (
        <>
            <Layout db={db} setDb={setDb} objects={objects}>
                <ContentContainer search={true} data={words} />
            </Layout>
        </>
    );
}

export async function getServerSideProps(context) {
    context.res.setHeader(
        "Cache-Control",
        "private, max-age=604800, stale-while-revalidate=604800"
    );

    const words = await fetchSearchData(context.query.keyword, context.query.matchType);

    if (words === null) {
        return {
            notFound: true,
        };
    }

    return { props: { words } };
}
