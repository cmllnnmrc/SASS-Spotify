const toggleMenu = document.querySelector(".toggle__menu");
const headNav = document.querySelector(".header__nav");
const headBlur = document.querySelector(".blur");
toggleMenu.addEventListener("click", () => {
  toggleMenu.classList.toggle("open");
  headNav.classList.toggle("open");
  headBlur.classList.toggle("open");
});

const links = document.querySelectorAll(".links__drop__item h4");
links.forEach((down) => {
  down.addEventListener("click", () => {
    down.nextElementSibling.classList.toggle("open");
    down.querySelector("i").classList.toggle("open");
  });
});

// const brand__img = document.querySelector(".branding img");
// const header = document.querySelector(".header");
// window.addEventListener("scroll", () => {
//   console.log(window.pageYOffset);
//   if (window.pageYOffset >= 100) {
//     header.classList.add("blue");
//     brand__img.style="background: black; border-radius: 5rem";
//   } else {
//     header.classList.remove("blue");
//   }
// });