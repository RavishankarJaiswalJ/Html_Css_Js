const images = document.querySelectorAll('.gallery img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.getElementById('close');

images.forEach(img => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightbox.style.Weight = '100vw';
    lightbox.style.height = '100vh';
    lightboxImg.src = img.src;
  });
});

closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});
