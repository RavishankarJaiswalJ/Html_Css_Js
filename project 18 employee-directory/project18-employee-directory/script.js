const employeeList = document.getElementById('employee-list');
const searchInput = document.getElementById('search');
let employees = [];

async function fetchEmployees() {
  const res = await fetch('https://randomuser.me/api/?results=50');
  const data = await res.json();
  employees = data.results;
  displayEmployees(employees);
}

function displayEmployees(list) {
  employeeList.innerHTML = '';
  list.forEach(emp => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${emp.picture.medium}" alt="${emp.name.first}" />
      <h3>${emp.name.first} ${emp.name.last}</h3>
      <p>${emp.email}</p>
      <p>${emp.location.city}, ${emp.location.country}</p>
    `;
    employeeList.appendChild(card);
  });
}

searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase();
  const filtered = employees.filter(emp =>
    emp.name.first.toLowerCase().includes(query) ||
    emp.name.last.toLowerCase().includes(query) ||
    emp.email.toLowerCase().includes(query)
  );
  displayEmployees(filtered);
});

fetchEmployees();
