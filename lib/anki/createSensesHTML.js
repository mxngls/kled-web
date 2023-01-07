export default async function createSensesHTML(Senses) {
  /*
    The purpose of this function is to convert our array of senses into valid html
    that can then be used as part of an Anki template. As the output of this function
    has to be a string in order to import as a specific field as part of an Anki card
    the html code could not be generated in a cleaner and more conceise way.
  */
  let senseArr = [];

  let css = "";
  let senses = "";

  Senses.map((sense, senseId) => {
    css += `
      #sense-info-sub-${senseId} {
        display: none;
      }

      #sense-info-header-${senseId} {
        display: block;
      }
    `;

    let senseTemp = `
    <div class="sense"> 
      <div id="sense-info-header-${senseId}" onclick="expander(${senseId})">
        <div class="translation">${sense.Translation}</div>
      </div>

      <div id="sense-info-sub-${senseId}">

        <div class="definition">
          ${sense.Definition}
        </div>

        <div class="examples">
          <ul>
            ${sense.Examples.map((ex, ind) => {
              return ind > 0
                ? "              " +
                    `<li class="example ${ex.Type}">${ex.Value}</li>`
                : "" + `<li class="example ${ex.Type}">${ex.Value}</li>`;
            }).join("\n")}
          </ul>
        </div>

        <div class="reference-container">
          ${
            !!sense.Reference &&
            sense.Reference.map((ref) => {
              return !ref.Id
                ? `
          <div class="reference">
            <div class="reference-type">${ref.Type}</div>
            <div class="reference-value">${ref.Value}</div>
          </div>`
                : `
          <div class="reference">
            <div class="reference-type">${ref.Type}</div>
            <div class="reference-value link">
              <a href="https://kled.io/view/${ref.Id}">${ref.Value}</a>
            </div>
          </div>`;
            }).join("\n")
          }
        </div>
      </div>
    </div>`;
    senses += senseTemp + "\n";
  });

  let html = `
<style>
  ${css}
</style>
<div id="sense-content">
  <div class="sense-container">
    ${senses}
  </div>
</div>`;
  return html;
}
