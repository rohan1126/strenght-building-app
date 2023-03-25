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

function generateCategoryHtml(name, exercises, intensity, image) {
  let html = `
    <img src="${image}" width="200" height="200">
    <h1>${name}</h1>
    <h4>
      <ul>
  `;
  for (let i = 0; i < exercises.length; i++) {
    html += `<p>${exercises[i]}${intensity}</p>`;
  }
  html += `
      </ul>
    </h4>
  `;
  return html;
}

function workoutList(split) {
  const push = [
    "Bench Press",
    "Dumbell Bench Press",
    "Dumbell Shoulder Press",
    "Smith Machine Incline Bench",
    "Dumbell Shoulder Raise",
  ];
  const bwPush = [
    "Push Up",
    "Tricep Push Downs",
    // "Dumbell Shoulder Press",
    // "Smith Machine Incline Bench",
    // "Dumbell Shoulder Raise",
  ];
  const pull = [
    "Barbell Back Row",
    "Bicep Cable Curl",
    "Bicep Preacher Curl",
    "Seated Back Row",
    "Bent Over Back Row",
  ];
  const bwpull = [
    "Pull up",
    "Push Up",
    "Bicep pull",
    // "Seated Back Row",
    // "Bent Over Back Row",
  ];

  const fwPush = ["DB press", "DB shoulder press", "DB tricep kickback"];
  const fwPull = ["DB Back Row", "DB Curl", "Seated incline curl"];
  const legs = [
    "Squat",
    "Lunges",
    "Leg Extensions",
    "Hamstring Curls",
    "Bulgarian Split Squat",
    "Calf Raises",
  ];
  const chest_back = ["Bench Press", "Back Row", "Chest Dips"];
  const arms = ["Bicep Curl", "Shoulder Press", "Tricep Extension"];

  if (split == "ppl") {
    return {
      push: push,
      pull: pull,
      legs: legs,
      bwPush: bwPush,
      bwpull: bwpull,
      fwPush: fwPush,
      fwPull: fwPull,
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
const equipment = document.getElementById("equip");
const weights = {
  light: " 3 x 10 easy weight",
  moderate: " 3 x 8 moderate weight",
  hard: " 4 x 8 heavy weight",
};

const chest_back_elem = document.getElementById("chest_back");
const arms_elem = document.getElementById("arms");

const workoutType = document.getElementById("workout");

function generateList(list, intensity) {
  let result = "<h4>";
  if (list) {
    for (let i = 0; i < list.length; i++) {
      result += "<ul>" + list[i] + intensity + "</ul>";
    }
  }
  result += "</h4>";
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
  const bwPush = workoutData.bwPush;
  const bwPull = workoutData.bwpull;
  const fwPush = workoutData.fwPush;
  const fwPull = workoutData.fwPull;
  const weight = weights[intensityValue];
  const equipmentAvail = equipment.value;

  switch (goalWorkout) {
    case "ppl":
      switch (equipmentAvail) {
        case "bw":
          pushElem.innerHTML = generateCategoryHtml(
            "Push",
            bwPush,
            "",
            "push.png"
          );
          pullElem.innerHTML = generateCategoryHtml(
            "Pull",
            bwPull,
            "",
            "pull.png"
          );
          legElem.innerHTML = generateCategoryHtml(
            "Legs",
            legs,
            "",
            "legs.png"
          );
          break;
        case "fw":
          pushElem.innerHTML = generateCategoryHtml(
            "Push",
            fwPush,
            weight,
            "push.png"
          );
          pullElem.innerHTML = generateCategoryHtml(
            "Pull",
            fwPull,
            weight,
            "pull.png"
          );
          legElem.innerHTML = generateCategoryHtml(
            "Legs",
            legs,
            weight,
            "legs.png"
          );
          break;

        case "fg":
          pushElem.innerHTML = generateCategoryHtml(
            "Push",
            push,
            weight,
            "push.png"
          );
          pullElem.innerHTML = generateCategoryHtml(
            "Pull",
            pull,
            weight,
            "pull.png"
          );
          legElem.innerHTML = generateCategoryHtml(
            "Legs",
            legs,
            weight,
            "legs.png"
          );
          break;
        default:
          break;
      }
      break;
    case "arnold":
      const chest_back = workoutData.chest_back;
      const arms = workoutData.arms;
      chest_back_elem.innerHTML =
        "<h1>" + "Chest and Back" + "</h1>" + generateList(chest_back, weight);
      arms_elem.innerHTML =
        "<h1>" + "Arms" + "</h1>" + generateList(arms, weight);
      legElem.innerHTML =
        "<h1>" + "LEGS" + "</h1>" + generateList(legs, weight);
      break;
    default:
      pullElem.innerHTML = "";
      legElem.innerHTML = "";
      chest_back_elem.innerHTML = "";
      arms_elem.innerHTML = "";
      pushElem.innerHTML = "<h1>" + "Please enter valid information" + "</h1>";
      break;
  }

  if (goalWorkout === "" || intensityValue === "") {
    pullElem.innerHTML = "";
    legElem.innerHTML = "";
    chest_back_elem.innerHTML = "";
    arms_elem.innerHTML = "";
    pushElem.innerHTML = "<h1>" + "Please enter valid information" + "</h1>";
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

const submitButton = document.getElementById("submit");
const workoutContainer = document.querySelector(".workout-container");

submitButton.addEventListener("click", () => {
  workoutContainer.classList.add("show-container");
});
