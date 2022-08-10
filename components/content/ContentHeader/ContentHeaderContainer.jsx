import { useRouter } from "next/router";
import { useState } from "react";
import SortIcon from "../../icons/sortIcon";
import SortOptionsContainer from "./SortOptionsContainer";

export default function ContentHeaderContainer({ resNum, option, setOption }) {
    const router = useRouter();
    const [display, setDisplay] = useState(false);

    const handleToggleSort = () => {
        event.stopImmediatePropagation()
        if (!display) {
            setDisplay(true);
        } else {
            setDisplay(false);
        }
    };

    return (
        <div className="content-container__header">
            <div className="content-container__info">
                Found <b>{resNum}</b> results for &quot;
                {
                    <span className="content-container__keyword">
                        {router.query.keyword}
                    </span>
                }
                &quot;
            </div>
                <button
                    type="button"
                    className="empty-button--sort"
                    onClick={() => handleToggleSort()}
                >
                    <SortIcon />
                </button>
                <SortOptionsContainer
                    display={display}
                    setDisplay={setDisplay}
                    option={option}
                    setOption={setOption}
                />
        </div>
    );
}
