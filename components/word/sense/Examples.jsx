import { useState } from "react";

export default function Examples({ examples, index, id }) {
    const [displayFull, setDisplayFull] = useState(false);

    const toggleDispalyExamples = () => {
        if (displayFull) {
            setDisplayFull(false);
        } else {
            setDisplayFull(true);
        }
    };

    const addClass = (example) => {
        if (example.Type === "Phrase") {
            return displayFull === true
                ? "example"
                : `example--${example.Type.toLowerCase()}`;
        } else if (example.Type === "Conversation") {
            return "example--convo";
        } else {
            return "example";
        }
    };

    return (
        <div className="word-container__examples-container">
            <ul className="word-container__examples-list">
                {examples.map((example, i) => {
                    return (
                        <li
                            key={`${id}-sense-${index}-example-${i}`}
                            className={`word-container__${addClass(example)}`}
                            dangerouslySetInnerHTML={{
                                __html: example.Value,
                            }}
                        />
                    );
                })}
            </ul>
            {examples.filter((example) => example.Type === "Phrase").length >
                0 && (
                <button
                    className="word-container__show-button--example"
                    onClick={() => {
                        toggleDispalyExamples();
                    }}
                >
                    {displayFull ? "Show less" : "Show more"}
                </button>
            )}
        </div>
    );
}
