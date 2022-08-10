import Link from "next/link";

export default function Inflections({ Inflections, InflectionLinks, id }) {
    let links = [];
    if (InflectionLinks !== null) {
        links = InflectionLinks.map((link, index) => {
            return (
                <Link href={`/view/${link.Id}`} key={`link-${index}`}>
                    <a
                        className="word-container__inflections-link"
                        dangerouslySetInnerHTML={{
                            __html: link.Hangul,
                        }}
                    />
                </Link>
            );
        });
    }
    return (
        <div className="word-container__inflections-container">
            <span
                key={`word-container__inflections-${id}`}
                className="word-container__inflections"
            >
                {Inflections}
            </span>{" "}
            {links}
        </div>
    );
}
