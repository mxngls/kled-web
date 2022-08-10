import Examples from "./Examples";
import Reference from "./References";

export default function SenseBody({
    id,
    index,
    definition,
    examples,
    references,
}) {
    return (
        <dl className="word-container__sense-body">
            <span className="word-container__definition">{definition}</span>
            {!!examples && <Examples examples={examples} />}
            {!!references && (
                <Reference references={references} index={index} id={id} />
            )}
        </dl>
    );
}
