const screens = document.querySelectorAll(".screen");
let current = 0;

function nextScreen() {
  screens[current].classList.remove("active");
  current++;
  screens[current].classList.add("active");
  typeWriter();
}

/* Typewriter */
function typeWriter() {
  const text = screens[current].querySelector(".typewriter");
  if (!text) return;

  const fullText = text.innerText;
  text.innerText = "";
  let i = 0;

  const interval = setInterval(() => {
    text.innerText += fullText[i];
    i++;
    if (i === fullText.length) clearInterval(interval);
  }, 80);
}

/* Floating hearts */
const hearts = document.querySelector(".hearts");

setInterval(() => {
  const heart = document.createElement("span");
  heart.innerHTML = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 15 + "px";
  hearts.appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}, 300);

/* Slider */
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

setInterval(() => {
  slides[slideIndex].classList.remove("active-slide");
  slideIndex = (slideIndex + 1) % slides.length;
  slides[slideIndex].classList.add("active-slide");
}, 2500);

typeWriter();
