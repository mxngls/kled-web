import FirstPageIcon from "../../icons/FirstPageIcon";

export default function ToFirstPageButton({ changeRoute }) {
    return (
        <>
            <button
                className="content-container--empty-button"
                onClick={() => {
                    changeRoute(0);
                }}
            >
                <FirstPageIcon />
            </button>
        </>
    );
}
