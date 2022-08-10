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
            d="M33.25 34.75 23.7 25.2q-.25-.25-.35-.5-.1-.25-.1-.55 0-.3.1-.55.1-.25.35-.5l9.6-9.6q.45-.45 1.075-.45t1.075.45q.45.45.45 1.075t-.45 1.075l-8.5 8.5 8.5 8.5q.45.45.45 1.05 0 .6-.45 1.05-.45.45-1.1.45-.65 0-1.1-.45ZM13.5 36q-.65 0-1.075-.425Q12 35.15 12 34.5v-21q0-.65.425-1.075Q12.85 12 13.5 12q.65 0 1.075.425Q15 12.85 15 13.5v21q0 .65-.425 1.075Q14.15 36 13.5 36Z"
            stroke="#cfd4db"
            fill="#cfd4db"
            strokeWidth="3"
        />
    </svg>
);

export default function FirstPageIcon() {
    return Icon;
}
