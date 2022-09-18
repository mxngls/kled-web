import { useRouter } from "next/router";
import { useEffect, useCallback, useState } from "react";

import WordContainer from "../word/WordContainer";
import GoToViewButton from "../GoToViewButton";

export default function ContentBody({ search, data, option }) {
    const router = useRouter();
    const [state, setState] = useState({ words: data.words });
    window.scrollTo({ top: 0, left: 0});

    const memorizedSortedWords = useCallback(
        (sort) => {
            const copy = [...state.words];
            sort === "frequency"
                ? copy.sort((a, b) => a.item.Frequency - b.item.Frequency)
                : sort === "name"
                ? copy.sort((a, b) => a.item.Alpha - b.item.Alpha)
                : null;
            setState((prevState) => ({ ...prevState, words: copy }));
        },
        [option, router.query.sort]
    );

    useEffect(() => {
        memorizedSortedWords(option);

        return () => {};
    }, [option, router.query.sort, memorizedSortedWords]);

    return (
        <div className={"content-container__body"}>
            {state.words
                .slice(10 * router.query.batch, 10 * router.query.batch + 10)
                .map((element, index, arr) => {
                    return (
                        <WordContainer
                            search={search}
                            last={
                                index === arr.length - 1 ||
                                (index + 1) % 10 === 0
                                    ? true
                                    : false
                            }
                            key={element.item.Id}
                            data={element}
                            keyword={data.keyword}
                        >
                            {element.item.Inflection === null && (
                                <GoToViewButton id={element.item.Id} />
                            )}
                        </WordContainer>
                    );
                })}
        </div>
    );
}
