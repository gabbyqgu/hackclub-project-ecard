const letter = [ // the actual letter! :OO 
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

/* ============== SCENE 1 -- ENVELOPE =================== */
function openEnvelope() {
  
  const envelope = document.getElementById("envelope");
  const openBtn = document.getElementById("open-btn");

  envelope.classList.add("open");
  openBtn.disabled = true; /* disables button */
  openBtn.textContent = "opening...";

  createPetals();

  setTimeout(startSpotlight, 2500); /* waits 2.5s b4 next scene */
}


/* ============== SCENE 2 -- SPOTLIGHT!! =================== */
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
  switchScene("scene-envelope", "scene-spotlight");
  ProgressDots();
}

function ProgressDots() {
  const container = document.getElementById("progress-dots")
  container.innerHTML = ""; //resets # of dots
  for (let i = 0; i < letter.length; i++) { //keep going while i < # of lines + inc by 1 every loop
    const dot = document.createElement("div"); 
    dot.classList.add("dot"); 
    dot.id = "dot-" + i;
    container.appendChild(dot); 
  }
}

function showLine(i) {
  if (i >= letter.length) { //did we show all the lines? yay or nay
    lineTimer = setTimeout(fullLetter, 800); //wait b4 showing full letter
    return
  }
}

currentLineIndex = i;


/* =============== SCENE 4 - final ================ */ 
function replayAll() {
  document.getElementById("petals-container").innerHTML = ""; /* wipes out all the flowers :( */
  // resetting the envelope
  document.getElementById("envelope").classList.remove("open");
  const openBtn = document.getElementById("open-btn");
  openBtn.disabled = false;
  openBtn.textContent = "Open Me 💌"
  switchScene("scene-final", "scene-envelope"); /* goes back to home screen */
}
/* ========== FROGGY ANIMATION :P ============ */
/* const frogFrames = [
  "frogrest-1.png",
  "frogrest-2.png",
  "frogsmile-1.png",
  "frogsmile-2.png"
];

let frogIndex = 0;
let frogInterval;

  frogIndex = 0;
  const frog = document.getElementById("frog");
  frogInterval = setInterval(function () {
    frog.src = frogFrames[frogIndex];

    frogIndex++;

    if (frogIndex >= frogFrames.length) {
      frogIndex = 0; // froggy loop animation
    }
  }, 700); // speed (lower = faster) */

  document.getElementById("replay-btn").style.animationDelay = "1.4s"; 



/* ==============  FALLING PETALS oh la la =================== */
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
