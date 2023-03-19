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

function drop() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

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
