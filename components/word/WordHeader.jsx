import { highlight } from "../../lib/higlight";

export default function WordHeader({
    hangul,
    homonymNumber,
    hanja,
    typeKr,
    keyword,
    children,
}) {
    return (
        <div className={`word-container__header${!typeKr ? "--fill" : ""}`}>
            <div className="word-container__first">
                <span className="word-container__hangul">
                    {hangul.includes(keyword)
                        ? highlight(hangul, keyword)
                        : hangul}
                    {homonymNumber !== 0 && <sup>{homonymNumber}</sup>}
                </span>{" "}
                {!!hanja && (
                    <span className="word-container__hanja">
                        ({" "}
                        {hanja.includes(keyword)
                            ? highlight(hanja, keyword)
                            : hanja}{" "}
                        )
                    </span>
                )}
                {children}
            </div>
            <div className="word-container__second">
                {!!typeKr && (
                    <div className="word-container__type">{typeKr}</div>
                )}
            </div>
        </div>
    );
}
