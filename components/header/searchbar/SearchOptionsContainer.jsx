import MatchType from "./MatchType";

export default function SearchOptions({
    wrapperRef,
    matchType,
    setInput,
    setDisplayOptions,
}) {
    return (
        <div
            ref={wrapperRef}
            className="search-bar-container__search-options-container"
        >
            <div className="search-bar-container__search-option-description">Match-Type:</div>
            <MatchType
                matchType={matchType}
                wrapperRef={wrapperRef}
                id={"match-type-exact"}
                value={"exact"}
                setInput={setInput}
                setDisplayOptions={setDisplayOptions}
                checked={true}
            />
            <MatchType
                matchType={matchType}
                wrapperRef={wrapperRef}
                id={"match-type-fuzzy"}
                value={"fuzzy"}
                setInput={setInput}
                setDisplayOptions={setDisplayOptions}
                checked={false}
            />
            <MatchType
                matchType={matchType}
                wrapperRef={wrapperRef}
                id={"match-type-include"}
                value={"include"}
                setInput={setInput}
                setDisplayOptions={setDisplayOptions}
                checked={false}
            />
        </div>
    );
}
