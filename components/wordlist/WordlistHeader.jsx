import WordListButton from "../WordListButton";
import DownloadIcon from "../icons/DownloadIcon";

export default function WordlistHeader({ wordNum, handleOnClick }) {
    return (
        <div className="wordlist-container__header">
            <span className="wordlist-container__description">
                Wordlist consist of <b>{wordNum}</b> words
            </span>
            <WordListButton
                handleOnClick={handleOnClick}
                content={"Export Wordlist"}
            >
                <DownloadIcon />
            </WordListButton>
        </div>
    );
}
