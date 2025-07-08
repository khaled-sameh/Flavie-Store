const menu = document.querySelector(".menu");
const header = document.querySelector("header");
const slide = document.querySelector(".slide");

menu.addEventListener("click", () => {
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
    header.classList.remove("active");
    slide.classList.remove("active");
  } else {
    menu.classList.add("active");
    header.classList.add("active");
    slide.classList.add("active");
  }
});
