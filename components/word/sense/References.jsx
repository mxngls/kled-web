import React from "react";
import Link from "next/link";

export default function Reference({ references, id, index }) {
    return (
        <div className="word-container__reference-container">
            {references.map((reference, i) => {
                return (
                    <div
                        className="word-container__reference-body"
                        key={`${id}-sense-${index}-ref-${i}`}
                    >
                        <span className="word-container__reference-type">
                            {reference.Type}
                            {":"}
                        </span>
                        {!!reference.Id ? (
                            <span className="word-container__reference-value">
                                {reference.Id.map((id, e) => (
                                    <Link
                                        key={`word-${id}-sense-${index}--ref-${i}-ref_link-${e}`}
                                        href={`/view/${id}`}
                                    >
                                        <a className="word-container__reference-link">
                                            {reference.Value[e]}
                                        </a>
                                    </Link>
                                ))}
                            </span>
                        ) : (
                            <span className="word-container__reference-value">
                                {reference.Value}
                            </span>
                        )}
                    </div>
                );
            })}
        </div>
    );
}
