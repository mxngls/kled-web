import { useRouter } from "next/router";
import SearchIcon from "../../icons/SearchIcon";
import EmptyPromptIcon from "../../icons/EmptyPromptIcon";
import SearchOptionsIcon from "../../icons/SearchOptionsIcon";

export default function SearchInput({
    keyword,
    matchType,
    setInput,
    setDisplayOptions,
    displayOptions,
}) {
    const router = useRouter();

    const handleOnChange = (event) => {
        setInput((prevInput) => ({
            ...prevInput,
            keyword: event.target.value,
        }));
    };

    const handleOnSubmit = (event) => {
        event.preventDefault();
        router.push({
            pathname: `/search`,
            query: {
                keyword: keyword,
                matchType: matchType,
                sort: "frequency",
                batch: 0,
            },
        });
    };

    const handleEmptyPrompt = () => {
        setInput((prevInput) => ({ ...prevInput, keyword: "" }));
    };

    const handleSearchOptions = (event) => {
        event.stopPropagation();
        if (!displayOptions) {
            setDisplayOptions(true);
        } else {
            setDisplayOptions(false);
        }
    };

    return (
        <form
            className="search-bar-container__input-wrap"
            onSubmit={(event) => handleOnSubmit(event)}
        >
            <button className="empty-button">
                <SearchIcon />
            </button>
            <input
                className="search-bar-container__input"
                maxLength={"40"}
                autoComplete="off"
                autoCorrect="off"
                onChange={(event) => handleOnChange(event)}
                placeholder={"Insert a word to look for in Korean or English"}
                value={keyword}
            ></input>
            <button
                type="reset"
                className="empty-button empty-prompt"
                onClick={() => handleEmptyPrompt()}
            >
                <EmptyPromptIcon />
            </button>
            <button
                type="button"
                className="empty-button"
                onClick={(event) => handleSearchOptions(event)}
            >
                <SearchOptionsIcon />
            </button>
        </form>
    );
}
