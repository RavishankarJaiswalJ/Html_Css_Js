const generateBtn = document.getElementById('generateBtn');
const gradientBox = document.getElementById('gradientBox');
const cssCode = document.getElementById('cssCode');

function getRandomColor() {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for(let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
}

function generateGradient() {
  const color1 = getRandomColor();
  const color2 = getRandomColor();
  const angle = Math.floor(Math.random() * 360);
  const gradient = `linear-gradient(${angle}deg, ${color1}, ${color2})`;
  
  gradientBox.style.background = gradient;
  cssCode.textContent = `background: ${gradient};`;
}

generateBtn.addEventListener('click', generateGradient);

// Generate one on load
generateGradient();
