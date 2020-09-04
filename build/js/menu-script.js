var navMain = document.querySelector(".header__nav");
var navToggle = document.querySelector(".header__button");

navMain.classList.remove("menu--nojs");

navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("header__nav--active")) {
    navMain.classList.remove("header__nav--active");
  } else {
    navMain.classList.add("header__nav--active");
  }
});
