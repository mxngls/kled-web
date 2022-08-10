import ChevronBackIcon from "../../icons/ChevronBackIcon";

export default function BackButton({changeRoute, batch}) {
    return (
        <>
            <button
                className="content-container--empty-button"
                onClick={() => {
                    if (batch !== "0") {
                        changeRoute(Number(batch) - 1);
                    } else {
                        ("");
                    }
                }}
            >
                <ChevronBackIcon />
            </button>
        </>
    );
}
