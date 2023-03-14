// script.js

function calculateBMR(age, weight, height, goals) {
  //66.47 + ( 6.24 × weight in pounds ) + ( 12.7 × height in inches ) − ( 6.755 × age in years )
  const calcCal = document.getElementById("cal");
  const bulk = document.getElementById("bulk");
  let Bmr = Math.round(66.47 + 6.24 * weight + 12.7 * height - 6.755 * age);
  let bulkCal = Bmr + 500;
  let cutCal = Bmr - 500;

  calcCal.textContent = "Your BMR is: " + Bmr;
  if (goals == "bulk") {
    bulk.textContent =
      "To Bulk you should be eating roughly: " + bulkCal + " Calories";
  } else {
    bulk.textContent =
      "To Cut you should be eating roughly: " + cutCal + " Calories";
  }
}
const form = document.getElementById("user-info-form");
const resultDiv = document.getElementById("result");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const ageInput = document.getElementById("age");
  const weightInput = document.getElementById("weight");
  const heightInput = document.getElementById("height");
  const goalsInput = document.getElementById("goals");

  const age = ageInput.value;
  const weight = weightInput.value;
  const height = heightInput.value;
  const goals = goalsInput.value;

  if (goals.includes("bulk")) {
    const result = "Based on your input you want to bulk";
    resultDiv.textContent = result;
    calculateBMR(age, weight, height, goals);
  } else {
    const result = "Based on your input you want to cut";
    resultDiv.textContent = result;
    calculateBMR(age, weight, height, goals);
  }
});