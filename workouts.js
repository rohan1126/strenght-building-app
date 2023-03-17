function getWorkout(link, keyword, callback) {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "21f43f6fe2msh2998ed916e77989p104673jsn0e135243fa7c",
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
  };
  fetch(link, options)
    .then((response) => response.json())
    .then((data) => {
      // Initialize the exerciseList variable outside the loop
      let exerciseList = "";
      for (let i = 0; i < 7; i++) {
        if (data[i].name.includes(keyword)) {
          exerciseList += "<li>" + data[i].name + "</li>";
        }
      }
      callback(exerciseList);
    })
    .catch((err) => console.error(err));
}

let pushLink = "https://exercisedb.p.rapidapi.com/exercises/target/pectorals";
let pullLink =
  "https://exercisedb.p.rapidapi.com/exercises/target/upper%20back";
let legLink = "https://exercisedb.p.rapidapi.com/exercises/target/quads";
const fetchBtn = document.getElementById("submit");
const exerciseData = document.getElementById("exerciseData");
const push = document.getElementById("push");
const pull = document.getElementById("pull");

const workoutType = document.getElementById("workout");
fetchBtn.addEventListener("click", () => {
  let goalWorkout = workoutType.value;

  if (goalWorkout == "ppl") {
    getWorkout(pushLink, "press", (exerciseList) => {
      push.innerHTML =
        "<h1>" + "Push" + "</h1>" + "<ul>" + exerciseList + "</ul>";
    });
    getWorkout(pullLink, "row", (exerciseList) => {
      pull.innerHTML =
        "<h1>" + "Pull" + "</h1>" + "<ul>" + exerciseList + "</ul>";
    });
    getWorkout(legLink, "squat", (exerciseList) => {
      exerciseData.innerHTML =
        "<h1>" + "Legs" + "</h1>" + "<ul>" + exerciseList + "</ul>";
    });
  } else if (goalWorkout == "arnold") {
    exerciseData.innerHTML = "<h1>" + "Arnold" + "</h1>";
    console.log(goalWorkout);
  } else {
    exerciseData.innerHTML = "<h3>" + "Please select valid workout" + "</h3>";
  }
});

// api for the workouts
