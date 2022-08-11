import WordListButton from "../WordListButton";
import DownloadIcon from "../icons/DownloadIcon";

export default function WordlistHeader({ wordNum, handleOnClick }) {
    return (
        <div className="wordlist-container__header">
            <span className="wordlist-container__description">
                {wordNum > 0 ? (
                    <>
                        Wordlist consist of <b>{wordNum}</b> words
                    </>
                ) : (
                    "No words added yet"
                )}
            </span>
            {wordNum > 0 && <WordListButton
                handleOnClick={handleOnClick}
                content={"Export Wordlist"}
            >
                <DownloadIcon />
            </WordListButton>}
        </div>
    );
}
