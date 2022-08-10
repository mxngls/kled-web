import SortOption from "./SortOption";
import { useEffect, useRef } from "react";

export default function SortOptionsContainer({
    display,
    setDisplay,
    setOption,
    option,
}) {
    const wrapperRef = useRef(null);

    useEffect(() => {
        function hideDropdown(event) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                wrapperRef.current.style.visibility = "hidden";
                wrapperRef.current.style.height = "0";
                setDisplay(false);
            }
        }
        document.addEventListener("click", hideDropdown);
        return () => {
            document.removeEventListener("click", hideDropdown);
        };
    }, [wrapperRef, display, setDisplay]);

    useEffect(() => {
        if (display) {
            wrapperRef.current.style.height = "95.969px";
            wrapperRef.current.style.visibility = "visible";
        } else {
            wrapperRef.current.style.height = "0";
            wrapperRef.current.style.visibility = "hidden";
        }
    });

    return (
        <div ref={wrapperRef} className="sort-options-container">
            <ul className="sort-options-container__list">
                <SortOption
                    wrapperRef={wrapperRef}
                    content={"Sort by: Frequency"}
                    mode={"frequency"}
                    option={option}
                    setOption={setOption}
                    setDisplay={setDisplay}
                />
                <SortOption
                    wrapperRef={wrapperRef}
                    content={"Sort by: Name"}
                    mode={"name"}
                    option={option}
                    setOption={setOption}
                    setDisplay={setDisplay}
                />
                <SortOption
                    wrapperRef={wrapperRef}
                    content={"Sort by: Accuracy"}
                    mode={"accuracy"}
                    option={option}
                    setOption={setOption}
                    setDisplay={setDisplay}
                />
            </ul>
        </div>
    );
}
