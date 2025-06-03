const images = [
  "https://picsum.photos/id/237/600/400",
  "https://picsum.photos/id/238/600/400",
  "https://picsum.photos/id/239/600/400",
  "https://picsum.photos/id/240/600/400",
  "https://picsum.photos/id/241/600/400"
];

let current = 0;

function showImage(index) {
  const img = document.getElementById("slider");
  img.src = images[index];
}

function nextImage() {
  current = (current + 1) % images.length;
  showImage(current);
}

function prevImage() {
  current = (current - 1 + images.length) % images.length;
  showImage(current);
}
