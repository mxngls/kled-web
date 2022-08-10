import { React } from "react";

export default function WordListButton({ handleOnClick, children, content }) {
    return (
        <button
            type="button"
            className={"wordlist-button"}
            onClick={() => handleOnClick()}
        >
            {" "}
            <div className="icon-wrap">{children}</div>
            <span className="button-content">{content}</span>
        </button>
    );
}
