// script.js

function calculateBMR(age, weight, height, goals) {
  //66.47 + ( 6.24 × weight in pounds ) + ( 12.7 × height in inches ) − ( 6.755 × age in years )
  const calcCal = document.getElementById("cal");
  const bulk = document.getElementById("bulk");
  const bmi = document.getElementById("bmi");
  const protein = document.getElementById("protein");
  let Bmr = Math.round(66.47 + 6.24 * weight + 12.7 * height - 6.755 * age);
  let Bmi = Math.round((703 * weight) / (height * height));
  let proteinMin = weight - 25;
  // let proteinMax = weight + 10;
  let bulkCal = Bmr + 500;
  let cutCal = Bmr - 500;

  bmi.textContent = "Your BMI is: " + Bmi;
  protein.textContent =
    "You should be aiming to eat " +
    proteinMin +
    " - " +
    weight +
    " grams of protein a day";
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
  const weightGoal = document.getElementById("weightGoal");
  const heightInput = document.getElementById("height");
  const goalsInput = document.getElementById("goals");

  const age = ageInput.value;
  const weight = weightInput.value;
  const height = heightInput.value;
  const goals = goalsInput.value.toLowerCase();
  const goalWeight = weightGoal.value;

  if (goals.includes("bulk") && weight < goalWeight) {
    const result = "Based on your input you want to bulk";
    resultDiv.textContent = result;
    calculateBMR(age, weight, height, goals);
  } else if (goals.includes("cut") && weight > goalWeight) {
    const result = "Based on your input you want to cut";
    resultDiv.textContent = result;
    calculateBMR(age, weight, height, goals);
  } else {
    const result =
      "Please check to see if your goals have been entered properly";
    resultDiv.textContent = result;
  }
});
