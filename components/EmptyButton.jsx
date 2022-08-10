export default function EmptyButton({ icon, handleOnClick }) {
    return (
        <button
            type="button"
            className="empty-button sort"
            onClick={(event) => handleOnClick(event)}
        >
            {icon}
        </button>
    );
}
