let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

function saveTransactions() {
  localStorage.setItem("transactions", JSON.stringify(transactions));
}

function addTransaction() {
  const title = document.getElementById("title").value;
  const amount = parseFloat(document.getElementById("amount").value);
  const type = document.getElementById("type").value;

  if (!title || isNaN(amount)) {
    alert("Please enter valid data");
    return;
  }

  transactions.push({ title, amount, type });
  saveTransactions();
  renderTransactions();
}

function renderTransactions() {
  const list = document.getElementById("transactionList");
  list.innerHTML = "";

  let income = 0, expense = 0;

  transactions.forEach((t, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${t.title} - ₹${t.amount.toFixed(2)} (${t.type})
      <button onclick="deleteTransaction(${index})">❌</button>
    `;
    list.appendChild(li);

    if (t.type === "income") income += t.amount;
    else expense += t.amount;
  });

  const balance = income - expense;
  document.getElementById("income").textContent = income.toFixed(2);
  document.getElementById("expense").textContent = expense.toFixed(2);
  document.getElementById("net").text
  document.getElementById("balance").textContent = balance.toFixed(2);

  renderChart(income, expense);
}

function deleteTransaction(index) {
  transactions.splice(index, 1);
  saveTransactions();
  renderTransactions();
}

function renderChart(income, expense) {
  const ctx = document.getElementById("chart").getContext("2d");
  if (window.myChart) window.myChart.destroy();

  window.myChart = new Chart(ctx, {
    type: "pie",
    data: {
      labels: ["Income", "Expense", "Net"],
      datasets: [{
        label: "Money Flow",
        data: [income, expense,net],
        backgroundColor: ["#28a745", "#dc3545", "#007bff"],
      }]
    }
  });
}

renderTransactions();
