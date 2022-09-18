import SenseContainer from "./sense/SenseContainer";
import Inflections from "./Inflections.jsx";

export default function WordBody({
    search,
    senses,
    inflections,
    inflectionLinks,
    id,
    keyword,
}) {
    const wordContainer = [];
    if (!!senses[0].Translation) {
        wordContainer.push(
            <SenseContainer
                search={search}
                key={`word-sense-${id}`}
                data={senses}
                id={id}
                keyword={keyword}
            />
        );
    } else if (!!inflections) {
        wordContainer.push(
            <Inflections
                key={`word-inflections-${id}`}
                Inflections={inflections}
                InflectionLinks={inflectionLinks}
                id={id}
                keyword={keyword}
            />
        );
    }

    return <div className="word-container__body">{wordContainer}</div>;
}
