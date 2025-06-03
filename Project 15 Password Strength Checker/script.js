const passwordInput = document.getElementById('password');
const strengthMsg = document.getElementById('strengthMsg');

passwordInput.addEventListener('input', () => {
  const pwd = passwordInput.value;
  strengthMsg.textContent = getStrength(pwd);
  strengthMsg.style.color = getColor(pwd);
});

function getStrength(password) {
  if (password.length === 0) return '';
  if (password.length < 6) return 'Weak';
  
  const hasUpper = /[A-Z]/.test(password);
  const hasLower = /[a-z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecial = /[!@#$%^&*]/.test(password);

  const score = [hasUpper, hasLower, hasNumber, hasSpecial].filter(Boolean).length;

  if (password.length >= 8 && score >= 3) return 'Strong';
  return 'Medium';
}

function getColor(password) {
  const strength = getStrength(password);
  switch (strength) {
    case 'Weak': return 'red';
    case 'Medium': return 'orange';
    case 'Strong': return 'green';
    default: return '#333';
  }
}
