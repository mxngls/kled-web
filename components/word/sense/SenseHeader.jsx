import { highlight } from "../../../lib/higlight";

export default function SenseHeader({ id, index, keyword, translation }) {
    return (
        <dt className="word-container__sense-header">
            <span
                key={`sense-number-${id}`}
                className="word-container__sense-number"
            >
                {`${index + 1}.`}
            </span>
            <span
                className="word-container__translation"
                key={`sense-translation-${id}-${index}`}
            >
                {translation.includes(keyword)
                    ? highlight(translation, `${keyword}`)
                    : translation}
            </span>
        </dt>
    );
}
