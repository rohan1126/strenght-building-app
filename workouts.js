// function getWorkout(link, keyword, callback) {
//   const options = {
//     method: "GET",
//     headers: {
//       "X-RapidAPI-Key": "21f43f6fe2msh2998ed916e77989p104673jsn0e135243fa7c",
//       "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
//     },
//   };
//   fetch(link, options)
//     .then((response) => response.json())
//     .then((data) => {
//       // Initialize the exerciseList variable outside the loop
//       let exerciseList = "";
//       for (let i = 0; i < 7; i++) {
//         if (data[i].name.includes(keyword)) {
//           exerciseList += "<p>" + data[i].name + "</p>";
//         }
//       }
//       callback(exerciseList);
//     })
//     .catch((err) => console.error(err));
// }
function workoutList(split) {
  const push = ["Bench Press", "Shoulder Press", "Tricep"];
  const pull = ["Barbell Back Row", "Bicep Curl", "Cable "];
  const legs = ["Squat", "Leg Extensions", "Hamstring Curls"];
  const chest_back = ["Bench Press", "Back Row", "Chest Dips"];
  const arms = ["Bicep Curl", "Shoulder Press", "Tricep Extension"];

  if (split == "ppl") {
    return {
      push: push,
      pull: pull,
      legs: legs,
    };
  } else {
    return {
      chest_back: chest_back,
      arms: arms,
      legs: legs,
    };
  }
}

const fetchBtn = document.getElementById("submit");
const exerciseData = document.getElementById("exerciseData");
const pushElem = document.getElementById("push");
const pullElem = document.getElementById("pull");
const legElem = document.getElementById("legs");
const intensity = document.getElementById("intensity");
const weights = {
  light: " 3 x 10 easy weight",
  moderate: " 3 x 8 moderate weight",
  hard: " 4 x 8 heavy weight",
};

const chest_back_elem = document.getElementById("chest_back");
const arms_elem = document.getElementById("arms");

const workoutType = document.getElementById("workout");

function generateList(list, intensity) {
  let result = "<h3>";
  if (list) {
    for (let i = 0; i < list.length; i++) {
      result += "<li>" + list[i] + intensity + "</li>";
    }
  }
  result += "</h3>";
  return result;
}

function updateWorkout() {
  pushElem.innerHTML = "";
  pullElem.innerHTML = "";
  legElem.innerHTML = "";
  chest_back_elem.innerHTML = "";
  arms_elem.innerHTML = "";

  const goalWorkout = workoutType.value;
  const intensityValue = intensity.value;
  const workoutData = workoutList(goalWorkout);
  const push = workoutData.push;
  const pull = workoutData.pull;
  const legs = workoutData.legs;
  const weight = weights[intensityValue];
  if (goalWorkout === "ppl") {
    pushElem.innerHTML = "<h1>" + "Push" + "</h1>" + generateList(push, weight);
    pullElem.innerHTML = "<h1>" + "Pull" + "</h1>" + generateList(pull, weight);
    legElem.innerHTML = "<h1>" + "LEGS" + "</h1>" + generateList(legs, weight);
  } else if (goalWorkout === "arnold") {
    const chest_back = workoutData.chest_back;
    const arms = workoutData.arms;
    chest_back_elem.innerHTML =
      "<h1>" + "Chest and Back" + "</h1>" + generateList(chest_back, weight);
    arms_elem.innerHTML =
      "<h1>" + "Arms" + "</h1>" + generateList(arms, weight);
    legElem.innerHTML = "<h1>" + "LEGS" + "</h1>" + generateList(legs, weight);
  }
}

fetchBtn.addEventListener("click", updateWorkout);

// getWorkout(pushLink, "press", (exerciseList) => {
//   push.innerHTML =
//     "<h1>" + "Push" + "</h1>" + "<ul>" + exerciseList + "</ul>";
// });
// getWorkout(pullLink, "row", (exerciseList) => {
//   pull.innerHTML =
//     "<h1>" +
//     "Pull" +
//     "</h1>" +
//     "<ul href=http://d205bpvrqc9yn1.cloudfront.net/1001.gif>" +
//     exerciseList +
//     "</ul>";
// });
//   getWorkout(legLink, "squat", (exerciseList) => {
//     exerciseData.innerHTML =
//       "<h1>" + "Legs" + "</h1>" + "<ul>" + exerciseList + "</ul>";
//   });
// } else if (goalWorkout == "arnold") {
//   getWorkout(pushLink, "press", (exerciseList) => {
//     push.innerHTML =
//       "<h1>" + "Chest/Back" + "</h1>" + "<ul>" + exerciseList + "</ul>";
//   });
//   getWorkout(pullLink, "row", (exerciseList) => {
//     pull.innerHTML =
//       "<h1>" + "Arms/Shoulders" + "</h1>" + "<ul>" + exerciseList + "</ul>";
//   });
//   getWorkout(legLink, "squat", (exerciseList) => {
//     exerciseData.innerHTML =
//       "<h1>" + "Legs" + "</h1>" + "<ul>" + exerciseList + "</ul>";
//   });
//   else {
//     exerciseData.innerHTML = "<h3>" + "Please select valid workout" + "</h3>";
//     workoutList(goalWorkout);
//   }
// });

// api for the workouts
