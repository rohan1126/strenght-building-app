const termsContainer = document.getElementById("demo");

function filterTerms() {
  const input = document.getElementById("myInput").value.toLowerCase();
  const terms = document.getElementsByClassName("term");

  Array.from(terms).forEach((term) => {
    const content = term.nextElementSibling;
    if (
      term.innerText.toLowerCase().indexOf(input) > -1 ||
      content.innerText.toLowerCase().indexOf(input) > -1
    ) {
      term.style.display = "";
      content.style.display = "";
    } else {
      term.style.display = "none";
      content.style.display = "none";
    }
  });
}

function createDropdowns(termsAndDefinitions) {
  let text = "";
  Object.keys(termsAndDefinitions).forEach((term) => {
    const definition = termsAndDefinitions[term];
    const content =
      definition.type === "text"
        ? `<p>${definition.value}</p>`
        : `<p><img src="${definition.value}" alt="${term} GIF" /></p>`;
    text += `
      <button class="collapsible term">${term}</button>
      <div class="content">
        ${content}
        
      </div>
    `;
  });
  return text;
}

function addClickEventListeners() {
  const coll = document.getElementsByClassName("collapsible");
  Array.from(coll).forEach((col) => {
    col.addEventListener("click", function () {
      this.classList.toggle("active");
      const content = this.nextElementSibling;
      content.style.maxHeight = content.style.maxHeight
        ? null
        : content.scrollHeight + "px";
    });
  });
}

async function loadTerms() {
  try {
    const response = await fetch("terms.json");
    const termsAndDefinitions = await response.json();
    const text = createDropdowns(termsAndDefinitions);
    termsContainer.innerHTML = text;
    addClickEventListeners();
  } catch (error) {
    console.error(error);
  }
}

// Call the functions when the page loads
loadTerms();
