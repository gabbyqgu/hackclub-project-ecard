// music controls!!
const music = document.getElementById("bg-music");
function startMusic() {

}

const letterLines = [
  "Dear mom... :) ",
  "happy mother's day!!!😛💗",
  "you are so awesome and amazing :D",
  "thank you for always making me yummy food and giving me chocolate and snacks 😋🍫",
  "and thank you for always walking sugar for me 😅",
  "i really appreciate you reminding me to putt like everyday 😒",
  "thank you so much for putting up with me and harry's(and dad!) stupid shenanigans",
  "I love you so sooooooooo much!! 💖🥹🥹🤗🫶",
  "you're my favorite person EVERRRR 🌸🫶",
];
/* ============== global function: switchs scenes =========== */
function switchScene(hideID, showID) {
  document.getElementById(hideID).classList.remove("active");
  document.getElementById(showID).classList.add("active");
}

/* ============== SCENE -- ENVELOPE =================== */
function openEnvelope() {
  startMusic();
  
  const envelope = document.getElementById("envelope");
  const openBtn = document.getElementById("open-btn");

  envelope.classList.add("open");
  openBtn.disabled = true; /* disables button */
  openBtn.textContent = "opening...";

  createPetals();

  setTimeout(startSpotlight, 1600); /* waits 1.6s b4 next scene */
}


/* ============== SCENE -- SPOTLIGHT!! =================== */
/* how long each spotlight line stays visible(in miliseconds) */
const line_hold_time = 2800;
/* how fast each line fades out */
const exit_duration = 500; 
/* how fast each line fades in */
const enter_duration = 600;
/* keeps track what line we are on */
let currentLineIndex = 0;
/* stores a timer */
let lineTimer = null;

function startSpotlight() {
  currentLineIndex = 0;
  switchScene("scene-envelope", "scene-spotlight")

  buildProgressDots();
}

function buildProgressDots() {
  const container = document.getElementById("progress-dots");
  container.innerHTML = "";

}
/* ========  FALLING PETALS =================================== */
const petalEmojis = [
  "🌸", "🌺", "🌷", "🌹", "✨", "🌻", "🌼", "🪻"
];

function createPetals() {
  const container = document.getElementById("petals-container");
  for (let i = 0; i < 9; i++) {
    const petal = document.createElement("div");
    petal.classList.add("petal"); /*adds it to the class 'petal' */
    petal.textContent =
      petalEmojis[Math.floor(Math.random() * petalEmojis.length)]; /* randomly picks one emoji */
    petal.style.left = Math.random() * 100 + "vw";
    petal.style.animationDuration = 8 + Math.random() * 6 + "s";
    petal.style.animationDelay = Math.random() * 10 + "s";
    petal.style.fontSize = 1.2 + Math.random() * 8.5 + "rem";
    container.appendChild(petal);
  }
} 
