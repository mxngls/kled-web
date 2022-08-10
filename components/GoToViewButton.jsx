import { useRouter } from "next/router";

export default function GoToViewButton({ id }) {
    const router = useRouter();
    const handleOnClickWord = (id) => {
        if (document.getSelection().type !== "Range")
            router.push(`/view/${id}`);
    };
    return (
        <button
            type="button"
            className="word-container__show-button--view"
            onClick={() => handleOnClickWord(id)}
        >
            Show Details
        </button>
    );
}
