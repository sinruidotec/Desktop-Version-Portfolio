const toolbarButton = document.querySelector(".toolbar__button");
const toolbarMenu = document.querySelector(".toolbar__menu");
const closeButton = document.querySelector(".menu__button-x");
const closeMenu = document.querySelectorAll(".close-menu");

toolbarButton.addEventListener("click", () => {
  toolbarMenu.classList.toggle("nav-menu__visible");
});

closeButton.addEventListener("click", () => {
  toolbarMenu.classList.remove("nav-menu__visible");
});

closeMenu.forEach(item => {
  item.addEventListener("click", () => {
    toolbarMenu.classList.remove("nav-menu__visible");
  });
});

toolbarMenu.classList.remove("nav-menu__visible");
