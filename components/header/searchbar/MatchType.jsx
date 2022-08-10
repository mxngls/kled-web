export default function MatchType({
    matchType,
    wrapperRef,
    id,
    value,
    setInput,
    setDisplayOptions,
    checked
}) {
    const handleMatchTypeClick = (event) => {
        setInput((prevInput) => ({
            ...prevInput,
            matchType: event.target.value,
        }));
    };

    return (
        <>
            <label
                htmlFor={id}
                className={`search-bar-container__match-type${matchType === value ? "--active" : ""}`}
                onClick={(event) => {
                    if (matchType !== event.target.value) {
                        handleMatchTypeClick(event);
                    } else {
                        wrapperRef.current.style.visibility = "hidden";
                        setDisplayOptions(false);
                    }
                }}
            >
                <input
                    className="search-bar-container__match-type-input"
                    name="match-type"
                    id={id}
                    type="radio"
                    value={value}
                    defaultChecked={checked}
                />
                <div className="search-bar-container__match-type-checkmark"></div>
                <div className="search-bar-container__match-type-description">
                    {value[0].toUpperCase() + value.slice(1, value.length)}
                </div>
            </label>
        </>
    );
}
