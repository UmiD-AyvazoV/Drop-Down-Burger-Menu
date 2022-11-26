const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".nav ul");
const lines = document.querySelectorAll(".hamburger div");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("slide");
  lines.forEach((item) => {
    item.classList.toggle("toggle");
  });
});
