function updateClock() {
  const now = new Date();
  let hours = now.getHours().toString().padStart(2, "0");
  let minutes = now.getMinutes().toString().padStart(2, "0");
  let seconds = now.getSeconds().toString().padStart(2, "0");
    // Check if it's AM or PM
  const amPm = hours >= 12 ? "PM" : "AM";

  // Convert to 12-hour format
  hours = hours % 12 || 12;
    // Add AM/PM to the time string
    const timeString = `${hours}:${minutes}:${seconds} ${amPm}`;

//   const timeString = `${hours}:${minutes}:${seconds}`;
  document.getElementById("clock").textContent = timeString;
  
}

// Update every second
setInterval(updateClock, 1000);
updateClock(); // initial call
