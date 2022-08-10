import LastPageIcon from "../../icons/lastPageIcon";

export default function ToLastPageButton({ changeRoute, maxPage }) {
    return (
        <>
            <button
                className="content-container--empty-button"
                onClick={() => {
                    changeRoute(maxPage);
                }}
            >
                <LastPageIcon />
            </button>
        </>
    );
}
