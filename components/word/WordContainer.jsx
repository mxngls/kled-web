import WordHeader from "./WordHeader.jsx";
import WordBody from "./WordBody.jsx";

export default function WordContainer({
  search,
  last,
  data,
  keyword,
  children,
}) {
  return (
    <div className={`word-container${last ? "--last" : ""}`}>
      <WordHeader
        hangul={data.item.Hangul}
        homonymNumber={data.item.HomonymNumber}
        hanja={data.item.Hanja}
        typeKr={data.item.TypeKr}
        keyword={keyword}
      >
        {children}
      </WordHeader>
      <WordBody
        search={search}
        senses={data.item.Senses}
        inflections={data.item.Inflection}
        inflectionLinks={data.item.InflectionLinks}
        id={data.item.Id}
        keyword={keyword}
      />
    </div>
  );
}
