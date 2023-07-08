const img = {
  a: "./img/sponge1.jpg",
  s: "./img/boss1.jpg",
  d: "./img/gary1.jpg",
  f: "./img/karen1.jpg",
  g: "./img/patrick1.jpg",
  h: "./img/plankton1.jpg",
  j: "./img/sandy1.jpg",
  k: "./img/sponge2.jpg",
  l: "./img/squid1.jpeg",
  z: "./img/patrick1.jpg",
};

function playsound(dataKey) {
  const audio = document.querySelector(`audio[data-key="${dataKey}"]`);
  const key = document.querySelector(`div[data-key="${dataKey}"]`);

  if (!audio) return;
  audio.currentTime = 0; // rewind to the start
  key.style.backgroundImage = `url(${img[dataKey]})`;

  setTimeout(() => {
    key.style.backgroundImage = "";
  }, 500);
  audio.play();
  key.classList.add("playing");
}
function removeTransition(e) {
  if (e.type === "transitionend") {
    this.classList.remove("playing");
  }
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", function (e) {
  playsound(e.key);
});
window.addEventListener("click", function (e) {
  const k = e.target.closest(".key").dataset.key;

  playsound(k);
});
