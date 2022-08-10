import React from "react";

const Icon = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        height="100%"
        width="100%"
        viewBox="0 0 48 48"
        className="empty-button__icon"
    >
        <path
            d="m26.95 34.9-9.9-9.9q-.25-.25-.35-.5-.1-.25-.1-.55 0-.3.1-.55.1-.25.35-.5L27 12.95q.45-.45 1.075-.45t1.075.45q.45.45.425 1.1-.025.65-.475 1.1l-8.8 8.8 8.85 8.85q.45.45.45 1.05 0 .6-.45 1.05-.45.45-1.1.45-.65 0-1.1-.45Z"
            stroke="#cfd4db"
            fill="#cfd4db"
            strokeWidth="3"
        />
    </svg>
);

export default function ChevronBackIcon() {
    return Icon;
}
