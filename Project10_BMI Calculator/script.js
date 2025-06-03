function calculateBMI() {
  const feet = parseFloat(document.getElementById('feet').value);
  const inches = parseFloat(document.getElementById('inches').value);
  const pounds = parseFloat(document.getElementById('pounds').value);
  const result = document.getElementById('result');

  if (isNaN(feet) || isNaN(inches) || isNaN(pounds) || feet < 0 || inches < 0 || pounds <= 0) {
    result.textContent = "Please enter valid height and weight.";
    result.style.color = 'red';
    return;
  }

  // Convert height to inches then to meters
  const totalInches = (feet * 12) + inches;
  const heightMeters = totalInches * 0.0254;

  // Convert pounds to kg
  const weightKg = pounds * 0.453592;

  const bmi = (weightKg / (heightMeters ** 2)).toFixed(2);

  let category = '';
  if (bmi < 18.5) category = 'Underweight';
  else if (bmi < 24.9) category = 'Normal weight';
  else if (bmi < 29.9) category = 'Overweight';
  else category = 'Obese';

  result.textContent = `Your BMI is ${bmi} (${category})`;
  result.style.color = '#000';
}
