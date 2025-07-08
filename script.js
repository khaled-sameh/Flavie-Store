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

const buttonJewelry = document.querySelector(".jewelry-btn");
const dropBox = document.querySelector(".drop-menu");

buttonJewelry.addEventListener("click", () => {
  if (buttonJewelry.classList.contains("active")) {
    buttonJewelry.classList.remove("active");
    dropBox.classList.remove("active");
  } else {
    buttonJewelry.classList.add("active");
    dropBox.classList.add("active");
  }
});
