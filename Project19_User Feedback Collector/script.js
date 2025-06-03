const starsContainer = document.getElementById('stars');
const commentInput = document.getElementById('comment');
const feedbackList = document.getElementById('feedbackList');

let selectedRating = 0;
let feedbacks = JSON.parse(localStorage.getItem("feedbacks")) || [];

function renderStars(rating) {
  starsContainer.innerHTML = '';
  for (let i = 1; i <= 5; i++) {
    const star = document.createElement('span');
    star.textContent = '★';
    star.className = i <= rating ? 'active' : '';
    star.addEventListener('click', () => {
      selectedRating = i;
      renderStars(i);
    });
    starsContainer.appendChild(star);
  }
}

function renderFeedbacks() {
  feedbackList.innerHTML = '';
  feedbacks.forEach(fb => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>Rating:</strong> ${'⭐'.repeat(fb.rating)}<br>${fb.comment}`;
    feedbackList.appendChild(li);
  });
}

function submitFeedback() {
  const comment = commentInput.value.trim();
  if (selectedRating === 0 || !comment) {
    alert("Please give a rating and a comment.");
    return;
  }

  feedbacks.unshift({ rating: selectedRating, comment });
  localStorage.setItem("feedbacks", JSON.stringify(feedbacks));
  commentInput.value = '';
  selectedRating = 0;
  renderStars(0);
  renderFeedbacks();
}

renderStars(0);
renderFeedbacks();
