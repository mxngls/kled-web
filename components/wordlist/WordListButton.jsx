import { React } from "react";

export default function WordListButton({ handleOnClick, children, content }) {
    return (
        <button
            type="button"
            className={"wordlist-button"}
            onClick={() => handleOnClick()}
        >
            {" "}
            <div className="wordlist-button__icon-wrap">{children}</div>
            <span className="wordlist-button__content">{content}</span>
        </button>
    );
}
