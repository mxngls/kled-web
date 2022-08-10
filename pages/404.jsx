import { useRouter } from "next/router";
import Layout from "../components/Layout";
import Link from "next/link";

export default function Custom404({ db, setDb, objects }) {
    return (
        <Layout db={db} setDb={setDb} objects={objects}>
            <main>
                <div className="not-found-container">
                    <div className="not-found-container__content">
                        <div className="not-found-container__emoji">
                            {"(^-^*)"}
                        </div>
                        <div className="not-found-container__message">
                            {
                                "Oops either no results were found or your link is broken."
                            }
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
}
