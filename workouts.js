const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "21f43f6fe2msh2998ed916e77989p104673jsn0e135243fa7c",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

const fetchBtn = document.getElementById("submit");
const exerciseData = document.getElementById("exerciseData");

fetchBtn.addEventListener("click", () => {
  fetch("https://exercisedb.p.rapidapi.com/exercises/bodyPart/chest", options)
    .then((response) => response.json())
    .then((data) => {
      let exerciseList = "";

      // Define the exerciseData variable
      let exerciseData = document.getElementById("exerciseData");
      for (let i = 0; i < data.length; i++) {
        if (data[i].name.includes("press") || data[i].name.includes("Press")) {
          exerciseList += "<li>" + data[i].name + "</li>";
        }
      }
      exerciseData.innerHTML = "<ul>" + exerciseList + "</ul>";
    })
    .catch((err) => console.error(err));
});
