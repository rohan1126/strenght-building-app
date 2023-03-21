function filterTerms() {
  // Get input value
  var input = document.getElementById("myInput").value.toLowerCase();

  // Get all elements with class "term"
  var terms = document.getElementsByClassName("term");

  // Loop through all "term" elements and hide those that do not match the search query
  for (var i = 0; i < terms.length; i++) {
    var term = terms[i];
    var content = term.nextElementSibling;
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
  }
}

function addClickEventListeners() {
  var coll = document.getElementsByClassName("collapsible");
  var i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  }
}

// Call the function when the page loads
addClickEventListeners();

let text = "";

// Make an AJAX request to load the terms and definitions from the JSON file
const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    const termsAndDefinitions = JSON.parse(this.responseText);
    const text = createDropdowns(termsAndDefinitions);
    document.getElementById("demo").innerHTML = text;
    addClickEventListeners();
  }
};
xhttp.open("GET", "terms.json", true);
xhttp.send();

function createDropdowns(termsAndDefinitions) {
  let text = "";

  Object.keys(termsAndDefinitions).forEach((term) => {
    const definition = termsAndDefinitions[term];

    if (definition.type === "text") {
      text += `<button class="collapsible term">${term}</button>
        <div class="content">
          <p>${definition.value}</p>
        </div>`;
    } else if (definition.type === "gif") {
      text += `<button class="collapsible term">${term}</button>
        <div class="content">
          <p>
            <img src="${definition.value}" alt="${term} GIF" />
          </p>
        </div>`;
    }
  });

  return text;
}
