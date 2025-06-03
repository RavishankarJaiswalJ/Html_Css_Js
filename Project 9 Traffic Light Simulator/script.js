let currentLight = 0;
const lights = ["red", "yellow", "green"];

function changeLight() {
  // Clear all lights
  lights.forEach(light => {
    document.getElementById(light).classList.remove("active");
  });

  // Activate the current light
  const current = lights[currentLight];
  document.getElementById(current).classList.add("active");

  // Move to the next light
  currentLight = (currentLight + 1) % lights.length;
}
