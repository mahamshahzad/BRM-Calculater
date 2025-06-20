function calculateBRM() {
  const gender = document.getElementById("gender").value;
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value);
  const age = parseFloat(document.getElementById("age").value);
  const resultDiv = document.getElementById("result");

  if (isNaN(weight) || isNaN(height) || isNaN(age)) {
    resultDiv.innerHTML = "Please enter valid values for all fields.";
    return;
  }

  let brm;
  if (gender === "male") {
    brm = 10 * weight + 6.25 * height - 5 * age + 5;
  } else {
    brm = 10 * weight + 6.25 * height - 5 * age - 161;
  }

  resultDiv.innerHTML = `Your estimated BRM is <strong>${brm.toFixed(2)}</strong> calories/day.`;
}
