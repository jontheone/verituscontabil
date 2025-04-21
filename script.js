const X = Math.floor(window.innerWidth / 2);
const Y = Math.floor(window.innerHeight * 0.65);
const Cards = document.querySelectorAll(".cards");
const progressLine = document.querySelector(".progress-line");
const progressIcon = progressLine.children[0];

window.addEventListener("scroll", () => {
  Cards.forEach((item) => {
    const rect = item.getBoundingClientRect();
    if (rect.top <= Y && rect.bottom >= Y) {
      item.style.backgroundColor = "var(--bg4)";
      item.style.border = "2px solid white";
    } else {
      item.style.backgroundColor = "var(--bg3)";
      item.style.border = "none";
    }
  });
  const posDiv = progressLine.getBoundingClientRect();
  const offset = Y - posDiv.top;
  if (posDiv.top <= Y && posDiv.bottom >= Y) {
    progressIcon.style.transform = `translateY(${offset}px)`;
    progressLine.style.background = `linear-gradient(to bottom, var(--accent) ${offset}px, white ${offset}px)`;
  }
});
