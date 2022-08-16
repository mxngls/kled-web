import { useRouter } from "next/router";

export default function SortOption({
    wrapperRef,
    content,
    mode,
    setOption,
    option,
    setDisplay,
}) {
    const router = useRouter();

    const handleOnClickSort = (option) => {
        if (router.query.sort !== option) {
            setOption(option);
            router.replace(
                {
                    pathname: `/search/search`,
                    query: {
                        keyword: router.query.keyword,
                        matchType: router.query.matchType,
                        sort: option,
                        batch: router.query.batch,
                    },
                },
                null,
                { shallow: true, scroll: false }
            );
        }
        wrapperRef.current.style.visibility = "hidden";
        setDisplay(false);
    };

    return (
        <li
            className={`sort-option-container__sort-option${option === mode ? "--active" : ""}`}
            onClick={() => {
                if (option !== mode) {
                    handleOnClickSort(mode);
                } else {
                    wrapperRef.current.style.visibility = "hidden";
                    setDisplay(false);
                }
            }}
        >
            {content}
        </li>
    );
}
