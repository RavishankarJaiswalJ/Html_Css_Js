function calculateTip() {
  const bill = parseFloat(document.getElementById('bill').value);
  const tipPercent = parseFloat(document.getElementById('tip').value);
  const output = document.getElementById('output');

  if (isNaN(bill) || isNaN(tipPercent) || bill <= 0 || tipPercent < 0) {
    output.textContent = "Please enter valid numbers.";
    output.style.color = 'red';
    return;
  }

  const tipAmount = (bill * tipPercent) / 100;
  const total = bill + tipAmount;

  output.style.color = '#000';
  output.innerHTML = `
    Tip: ₹${tipAmount.toFixed(2)}<br>
    Total: ₹${total.toFixed(2)}
  `;
}
