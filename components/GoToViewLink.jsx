import { useRouter } from "next/router";

export default function GoToViewButton({ id }) {
    return (
        <a
            className="word-container__show-button--view"
            href={`/view/${id}`}
            style={{ textDecoration: "none" }}
        >
            Show Details
        </a>
    );
}
