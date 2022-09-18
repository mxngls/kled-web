async function createSensesHTML(Senses) {
    const renderReference = (Reference) => {
        let refList = "";
        let n = "";
        let t = "";

        if (Reference !== null) {
            for (let i = 0; i < Reference.length; i++) {
                if (i === Reference.length - 1) {
                    n = "\n";
                }

                if (i > 0) {
                    t = `                        `;
                }

                let referenceContainer = " ";
                let refClass = "";
                if (Reference[i]["Type"] !== "") {
                    referenceContainer += `            <div class="reference-type">
                                ${Reference[i]["Type"]}:
                            </div>
                            `;
                }
                if (Reference[i]["Id"] !== null) {
                    if (Reference[i]["Id"] !== "") {
                        refClass = " link";
                        Reference[i]["Value"].map((ref) => {
                            let url = `https://krdict.korean.go.kr/m/eng/searchResultView?ParaWordNo=${Reference[i]["Id"][i]}&nationCode=6&nation=eng&viewType=A`;
                            referenceContainer += `<a class="reference-value${refClass}" href="${url}">
                                ${ref}
                            </a>
                            `;
                        });
                    } else {
                        if (i !== Reference.length - 1) {
                            n = "\n";
                        }
                        referenceContainer += `<div class="reference-value${refClass}">
                                ${Reference[i]["Value"]}
                            </div>${n}`;
                    }
                }

                refList += `${t}<div class="reference">
                ${referenceContainer}
                        </div>${n}`;
            }

            return refList;
        }
    };
    const renderExamples = (Examples) => {
        let examplesContainer = "";
        for (let n = 0; n < Examples.length; n++) {
            examplesContainer += `<li class="example ${Examples[
                n
            ].Type.toLowerCase()}">${Examples[n].Value}</li>`;
        }
        const exampleList = `<ul>
            ${examplesContainer}
                        </ul>`;
        return exampleList;
    };
    const renderSenses = (Senses) => {
        let css = "";
        let senseContainer = "";
        let index = "";
        let n = "";
        let t = "";

        for (let i = 0; i < Senses.length; i++) {
            let ref;

            if (Senses[i]["Reference"] !== null) {
                ref = renderReference(Senses[i]["Reference"]);
            } else {
                ref = "";
            }

            if (Senses.length > 1) {
                index = `<div class="sense-nr">
                        ${i + 1}. 
                    </div>`;
            }

            if (i !== Senses.length - 1) {
                n = "\n";
            }

            css += `#sense-info-sub-${i} {
                display: none;
            }
            
            #sense-info-header-${i} {
                display: block;
            }
            `;

            if (i > 0) {
                t = `\t\t\t`;
            }

            senseContainer += `${t}<div class="sense">
                <div id="sense-info-header-${i}" onclick="expander(${i})">
                    ${index}
                    <div class="translation">
                        ${Senses[i]["Translation"]}
                    </div>
                </div>
                <div id="sense-info-sub-${i}">
                    <div class="definition">
                        ${Senses[i]["Definition"]}
                    </div>
                    <div class="krDefinition">
                        ${""}
                    </div>
                    <div class="examples">
                        ${renderExamples(Senses[i]["Examples"])}
                    </div>
                    <div class="reference-container">
                        ${ref}
                    </div>
                </div>
            </div>${n}`;
        }

        let html = `<div id="sense-content">
    <head>
        <style>
            ${css}
        </style>
    </head>

    <body>
        <div id="senses-container">
            ${senseContainer}
        </div>
    </body>
</div>`;

        return html;
    };
    return renderSenses(Senses);
}

export default createSensesHTML;
