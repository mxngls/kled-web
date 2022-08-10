import WordContainer from "../Word/WordContainer";
import DeleteWordButton from "../DeleteWordButton";

export default function WordlistBody({ data, setData }) {
    return (
        <div className="wordlist-container__body">
            {data.map((element, index) => {
                return (
                    <WordContainer
                        detail={element.item.Senses.length > 1 ? true : false}
                        data={element}
                        last={index === data.length - 1 ? true : false}
                        keyword={null}
                        key={element.item.Id}
                    >
                        <DeleteWordButton
                            id={element.item.Id}
                            setData={setData}
                        />
                    </WordContainer>
                );
            })}
        </div>
    );
}
