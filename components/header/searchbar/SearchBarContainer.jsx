import { useEffect, useState, useRef } from "react";
import SearchOptions from "./SearchOptionsContainer";
import SearchInput from "./SearchInput";

export default function SearchBarContainer({ main }) {
    const [input, setInput] = useState({ keyword: "", matchType: "exact" });
    const [displayOptions, setDisplayOptions] = useState(false);
    const wrapperRef = useRef(false);

    useEffect(() => {
        function hideDropdown() {
            const docWidth = document.body.clientWidth;
            if (wrapperRef.current) {
                if (docWidth < 530) {
                    wrapperRef.current.classList.replace(
                        "search-bar-container__search-options-container--expanded-horizontal",
                        "search-bar-container__search-options-container"
                    );
                } else if (docWidth > 530) {
                    wrapperRef.current.classList.replace(
                        "search-bar-container__search-options-container--expanded-vertical",
                        "search-bar-container__search-options-container"
                    );
                }
                setDisplayOptions(false);
            }
        }
        document.addEventListener("click", hideDropdown);
        return () => {
            document.removeEventListener("click", hideDropdown);
        };
    }, [wrapperRef]);

    useEffect(() => {
        const docWidth = document.body.clientWidth;
        if (displayOptions) {
            if (docWidth < 530) {
                wrapperRef.current.classList.replace(
                    "search-bar-container__search-options-container",
                    "search-bar-container__search-options-container--expanded-horizontal"
                );
            } else if (docWidth > 530) {
                wrapperRef.current.classList.replace(
                    "search-bar-container__search-options-container",
                    "search-bar-container__search-options-container--expanded-vertical"
                );
            }
        } else {
            if (docWidth < 530) {
                wrapperRef.current.classList.replace(
                    "search-bar-container__search-options-container--expanded-horizontal",
                    "search-bar-container__search-options-container"
                );
            } else if (docWidth > 530) {
                wrapperRef.current.classList.replace(
                    "search-bar-container__search-options-container--expanded-vertical",
                    "search-bar-container__search-options-container"
                );
            }
        }
    }, [displayOptions]);

    return (
        <div className={`search-bar-container${main ? "--main" : ""}`}>
            <SearchInput
                wrapperRef={wrapperRef}
                keyword={input.keyword}
                matchType={input.matchType}
                setInput={setInput}
                setDisplayOptions={setDisplayOptions}
                displayOptions={displayOptions}
            />
            <SearchOptions
                wrapperRef={wrapperRef}
                matchType={input.matchType}
                setInput={setInput}
                setDisplayOptions={setDisplayOptions}
            />
        </div>
    );
}
