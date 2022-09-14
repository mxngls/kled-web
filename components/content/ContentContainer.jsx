import { useState } from "react";
import { useRouter } from "next/router";

import ContentFooter from "./contentFooter/ContentFooterContainer";
import ContentHeader from "./ContentHeader/ContentHeaderContainer";

import ContentBody from "./ContentBody";

export default function ContentContainer({ data, setData }) {
    const router = useRouter();
    const [option, setOption] = useState(router.query.sort);

    return (
        <div className="content-container">
            <ContentHeader
                resNum={data.words.length}
                keyword={data.keyword}
                option={option}
                setOption={setOption}
            />
            <ContentBody data={data} setData={setData} option={option} />
            <ContentFooter
                keyword={router.query.keyword}
                matchType={router.query.matchType}
                order={router.query.sort}
                resNum={data.words.length}
            ></ContentFooter>
        </div>
    );
}
