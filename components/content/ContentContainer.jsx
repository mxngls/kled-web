import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";

import ContentFooter from "./contentFooter/ContentFooterContainer";
import ContentHeader from "./ContentHeader/ContentHeaderContainer";

import WordContainer from "../word/WordContainer";
import ContentBody from "./ContentBody";

import GoToViewButton from "../GoToViewButton";

export default function ContentContainer({ data }) {
    const router = useRouter();
    const [state, setState] = useState({ words: [] });
    const [option, setOption] = useState(router.query.sort);

    const memorizedSortedWords = useCallback(
        (sort) => {
            const copy = [].concat(data);

            sort === "frequency" || null
                ? copy.sort((a, b) => {
                      return a.item.Frequency - b.item.Frequency;
                  })
                : sort === "name"
                ? copy.sort((a, b) => {
                      return a.item.Alpha - b.item.Alpha;
                  })
                : sort === "accuracy"
                ? copy.sort((a, b) => {
                      return a.score - b.score;
                  })
                : null;
            setState((prevState) => ({
                ...prevState,
                words: copy.map((element, index, copy) => {
                    return (
                        <WordContainer
                            last={
                                index === copy.length - 1 ||
                                (index + 1) % 10 === 0
                                    ? true
                                    : false
                            }
                            key={element.item.Id}
                            data={element}
                            keyword={router.query.keyword}
                        >
                            {element.item.Inflection === null && (
                                <GoToViewButton id={element.item.Id} />
                            )}
                        </WordContainer>
                    );
                }),
            }));
        },
        [data, router]
    );

    useEffect(() => {
        memorizedSortedWords(option);
    }, [option, data, router.query.keyword, memorizedSortedWords]);

    return (
        <div className="content-container">
            <ContentHeader
                resNum={data.length}
                option={option}
                setOption={setOption}
            />
            <ContentBody words={state.words} />
            <ContentFooter
                keyword={router.query.keyword}
                matchType={router.query.matchType}
                order={router.query.sort}
                resNum={data.length}
            ></ContentFooter>
        </div>
    );
}
