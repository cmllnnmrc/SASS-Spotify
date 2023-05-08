const toggleMenu = document.querySelector(".toggle__menu");
const headNav = document.querySelector(".header__nav");
const headBlur = document.querySelector(".blur");
toggleMenu.addEventListener("click", () => {
  toggleMenu.classList.toggle("open");
  headNav.classList.toggle("open");
  headBlur.classList.toggle("open");
});