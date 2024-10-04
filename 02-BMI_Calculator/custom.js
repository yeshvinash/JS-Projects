const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  // Validate height and weight inputs
  if (!height || height <= 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height`;
    return;
  }

  if (!weight || weight <= 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight`;
    return;
  }

  // Calculate BMI
  const bmi = (weight / ((height * height) / 10000)).toFixed(2);

  // Display the result based on BMI value
  let message = `<p>Your BMI is ${bmi}.</p>`;

  if (bmi < 18.5) {
    message += `<span>Under Weight = Less than 18.6</span>`;
  } else if (bmi >= 18.5 && bmi < 24.9) {
    message += `<span>Normal Weight = 18.6 and 24.9</span>`;
  } else if (bmi >= 24.9 && bmi < 30) {
    message += `<span>Overweight = Greater than 24.9</span>`;
  } else {
    message += `<span>Suffering from Obesity</span>`;
  }

  results.innerHTML = message;
});
