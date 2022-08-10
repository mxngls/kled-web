const highlight = (match, keyword) => {
    const matchIndex = match.indexOf(keyword);
    return (
        <span>
            {match.slice(0, matchIndex)}
            <span className="word-container__match">
                {match.slice(matchIndex, matchIndex + keyword.length)}
            </span>
            {match.slice(matchIndex + keyword.length, match.length)}
        </span>
    );
};

export { highlight };
