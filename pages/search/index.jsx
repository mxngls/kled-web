import { getData } from "../../lib/search.js";
import Layout from "../../components/Layout.jsx";
import ContentContainer from "../../components/content/ContentContainer.jsx";

export default function Results({ data, db, setDb, objects }) {
    return (
        <>
            <Layout db={db} setDb={setDb} objects={objects}>
                <ContentContainer search={true} data={data} />
            </Layout>
        </>
    );
}

export async function getServerSideProps(context) {
    context.res.setHeader(
        "Cache-Control",
        "private, max-age=604800, stale-while-revalidate=604800"
    );
    const data = await getData(context.query.keyword, context.query.matchType);
    if (data.length === 0) {
        return {
            notFound: true,
        };
    }
    return {
        props: { data },
    };
}
