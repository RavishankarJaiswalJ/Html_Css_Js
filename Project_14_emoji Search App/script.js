const emojis = [
  { symbol: "😀", name: "grinning face" },
  { symbol: "😂", name: "face with tears of joy" },
  { symbol: "😎", name: "smiling face with sunglasses" },
  { symbol: "😍", name: "heart eyes" },
  { symbol: "🥰", name: "smiling face with hearts" },
  { symbol: "😴", name: "sleeping face" },
  { symbol: "😡", name: "angry face" },
  { symbol: "😺", name: "smiling cat face" },
  { symbol: "👋", name: "waving hand" },
  { symbol: "🙏", name: "folded hands" },
  { symbol: "👍", name: "thumbs up" },
  { symbol: "❤️", name: "red heart" },
  { symbol: "🔥", name: "fire" },
  { symbol: "✨", name: "sparkles" },
  { symbol: "🎉", name: "party popper" },
];

const searchInput = document.getElementById('search');
const resultsDiv = document.getElementById('results');

function displayResults(filteredEmojis) {
  resultsDiv.innerHTML = '';
  filteredEmojis.forEach(emoji => {
    const box = document.createElement('div');
    box.className = 'emoji-box';
    box.innerText = emoji.symbol;
    box.title = emoji.name;
    resultsDiv.appendChild(box);
  });
}

searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase();
  const filtered = emojis.filter(e => e.name.includes(query));
  displayResults(filtered);
});

// Display all on first load
displayResults(emojis);
