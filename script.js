// ===== Shayaris =====
const shayaris = [
  "Haathon ko sambhaale mere haathon mein <br> hello",
  "Kaise haathon ko sambhaale mere haathon mein?",
  "Jab tak neend na aaye in lakeeron mein",
  "Baatein hon… Haan…",
];

let currentIndex = 0;
const shayariBox = document.getElementById("shayariBox");

// ===== Initial Display =====
shayariBox.innerHTML = shayaris[currentIndex];
// ===== Fade Helper =====
function changeShayari(newIndex) {
  shayariBox.style.opacity = 0; // fade out
  setTimeout(() => {
    shayariBox.textContent = shayaris[newIndex];
    shayariBox.style.opacity = 1; // fade in
  }, 500);
}

// ===== Navigation =====
function nextShayari() {
  currentIndex = (currentIndex + 1) % shayaris.length;
  changeShayari(currentIndex);
}

function prevShayari() {
  currentIndex = (currentIndex - 1 + shayaris.length) % shayaris.length;
  changeShayari(currentIndex);
}

// ===== Music Toggle =====
const bgMusic = document.getElementById("bgMusic");
let isPlaying = false;

function toggleMusic() {
  if (isPlaying) {
    bgMusic.pause();
  } else {
    bgMusic.play();
  }
  isPlaying = !isPlaying;
}

// ===== Floating Hearts =====
const heartsContainer = document.querySelector(".hearts");

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 4 + Math.random() * 3 + "s";
  heart.style.width = 10 + Math.random() * 20 + "px";
  heart.style.height = heart.style.width;
  heartsContainer.appendChild(heart);

  setTimeout(() => heart.remove(), 7000);
}

setInterval(createHeart, 300);

// ===== Mini Hearts Around Title =====
const titleHeartsContainer = document.querySelector(".title-hearts");

function createTitleHeart() {
  const heart = document.createElement("div");
  heart.classList.add("title-heart");
  heart.style.left = Math.random() * 180 + "px"; // spread over container
  heart.style.animationDuration = 2 + Math.random() * 1.5 + "s";
  titleHeartsContainer.appendChild(heart);

  setTimeout(() => heart.remove(), 3000);
}

setInterval(createTitleHeart, 200);
