const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "21f43f6fe2msh2998ed916e77989p104673jsn0e135243fa7c",
    "X-RapidAPI-Host": "exercises-by-api-ninjas.p.rapidapi.com",
  },
};

const fetchBtn = document.getElementById("submit");
const exerciseData = document.getElementById("exerciseData");

fetchBtn.addEventListener("click", () => {
  fetch(
    "https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?muscle=biceps",
    options
  )
    .then((response) => response.json())
    .then((data) => {
      let exerciseList = "";
      // Filter the data array by name
      for (let i = 0; i < data.length; i++) {
        // Check if the name matches "Incline Hammer Curls" or "Concentration Curl"
        if (
          data[i].name === "Incline Hammer Curls" ||
          data[i].name === "Concentration curl"
        ) {
          // Log the instructions
          exerciseList += "<li>" + data[i].name + "</li>";
        }
      }
      exerciseData.innerHTML = "<ul>" + exerciseList + "</ul>";
    })
    .catch((err) => console.error(err));
});
