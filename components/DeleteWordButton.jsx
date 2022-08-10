import DeleteIcon from "./icons/DeleteIcon";

export default function DeleteWordButton({ id, setData }) {
    const handleOnClick = () => {
        setData((prevData) =>
            prevData.filter((element) => {
                sessionStorage.removeItem(id);
                return element.item.Id !== id;
            })
        );
    };

    return (
        <button
            className="delete-button"
            onClick={() => {
                handleOnClick();
            }}
        >
            <DeleteIcon />
        </button>
    );
}
