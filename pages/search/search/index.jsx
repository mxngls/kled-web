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
import { SpinnerCircularFixed } from "spinners-react";

    const words = await fetchSearchData(context.query.keyword, context.query.matchType);

    if (words === null) {
        return {
            notFound: true,
        };
    }

    return { props: { words } };
        router.events.on("routeChangeStart", handleRouteChange);

        return () => {
            router.events.off("routeChangeStart", handleRouteChange);
        };
    }, []);
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
}
