import { useRouter } from "next/router";
import ToFirstPageButton from "./ToFirstPageButton";
import ToLastPageButton from "./ToLastPageButton";
import ForwardButton from "./ForwardButton";
import BackButton from "./BackButton";
import CurrentPage from "./CurrentPage";
import Filler from "./Filler";

export default function ContentFooterContainer({
    resNum,
    keyword,
    matchType,
    order,
}) {
    const router = useRouter();
    const maxPage = String(Math.floor(resNum / 10) - 1);

    const changeRoute = (option) => {
        router.replace(
            {
                pathname: `/search/search`,
                query: {
                    keyword: keyword,
                    matchType: matchType,
                    sort: order,
                    batch: option,
                },
            },
            {
                pathname: `/search/search`,
                query: {
                    keyword: keyword,
                    matchType: matchType,
                    sort: order,
                    batch: option,
                },
            },
            { shallow: true }
        );
    };

    if (resNum > 10) {
        return (
            <div className="content-container__footer">
                {router.query.batch !== "0" && (
                    <>
                        <ToFirstPageButton changeRoute={changeRoute} />
                        <BackButton
                            changeRoute={changeRoute}
                            batch={router.query.batch}
                        />
                    </>
                )}
                {router.query.batch === "0" && <Filler />}
                <CurrentPage batch={router.query.batch} resNum={resNum} />
                {router.query.batch === maxPage && <Filler />}
                {router.query.batch !== maxPage && (
                    <>
                        <ForwardButton
                            changeRoute={changeRoute}
                            maxPage={maxPage}
                            batch={router.query.batch}
                        />
                        <ToLastPageButton
                            changeRoute={changeRoute}
                            maxPage={maxPage}
                        />
                    </>
                )}
            </div>
        );
    } else {
        return (
            <div className="content-container__footer">
                <CurrentPage batch={router.query.batch} resNum={resNum} />
            </div>
        );
    }
}
