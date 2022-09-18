import SenseBody from "./SenseBody";
import SenseHeader from "./SenseHeader";

export default function Sense({ search, data, id, keyword }) {
    return data.map((sense, index) => (
        <dl
            className={`word-container__sense-container${
                index === data.length - 1 ? "--last" : search ? "--search" : ""
            }`}
            key={`${id}-sense-${index}`}
        >
            <SenseHeader
                id={id}
                index={index}
                keyword={keyword}
                translation={sense.Translation}
            />
            <SenseBody
                id={id}
                index={index}
                definition={sense.Definition}
                examples={sense.Examples}
                references={sense.Reference}
            />
        </dl>
    ));
}
