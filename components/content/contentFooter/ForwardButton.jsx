import ChevronForwardIcon from "../../icons/chevronForwardIcon";

export default function ForwardButton({ changeRoute, batch, maxPage }) {
    return (
        <>
            <button
                className="content-container--empty-button"
                onClick={() => {
                    if (batch !== maxPage) {
                        changeRoute(Number(batch) + 1);
                    }
                }}
            >
                <ChevronForwardIcon />
            </button>
        </>
    );
}
