const menu = document.querySelector(".menu");
const menuIcon = document.querySelector(".bx-menu");

menu.addEventListener("click", () => {
  document.querySelector(".nav").classList.toggle("show-menu");
  if (menuIcon.classList.contains("bx-menu")) {
    menuIcon.classList.replace("bx-menu", "bx-x");
  } else {
    menuIcon.classList.replace("bx-x", "bx-menu");
  }
});
