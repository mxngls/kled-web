import { useRouter } from "next/router";

export default function ContentBody({ words }) {
    const router = useRouter();
    return (
        <div className={"content-container__body"}>
            {words.slice(10 * router.query.batch, 10 * router.query.batch + 10)}
        </div>
    );
}
