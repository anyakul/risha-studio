var popupCallBack = document.querySelector(".header__popup-call-back");
var buttonOpenCallback = document.querySelector(".header__button");
var buttonCloseCallback = document.querySelector(".header__popup-call-back-button-close");

navMain.classList.remove("menu--nojs");

buttonOpenCallback.addEventListener("click", function() {
  if (navMain.classList.contains("header__popup-call-back--active")) {
    popupCallBack.classList.remove("header__popup-call-back--active");
  } else {
    popupCallBack.classList.add("header__popup-call-back--active");
  }
});

buttonCloseCallback.addEventListener("click", function() {
  if (navMain.classList.contains("header__popup-call-back--active")) {
    popupCallBack.classList.remove("header__popup-call-back--active");
  } else {
    popupCallBack.classList.add("header__popup-call-back--active");
  }
});
