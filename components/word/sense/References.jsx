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
                        <b className="word-container__reference-type">
                            {reference.Type}
                            {":"}
                        </b>
                        {!!reference.Id ? (
                            <Link href={`/view/${reference.Id}`}>
                                <a
                                    className="word-container__reference-value"
                                    dangerouslySetInnerHTML={{
                                        __html: reference.Value,
                                    }}
                                />
                            </Link>
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
