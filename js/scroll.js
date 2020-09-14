var main = document.querySelector('.main');
var isDesktop=true;
if (main.offsetWidth <= 1199) {
  isDesktop=false;
}

function scrollHorizontally(e) {
  if (isDesktop) {
        e = window.event || e;
        var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
        document.querySelector('.main__wrapper').scrollLeft -= (delta*100); // Multiplied by 10
        e.preventDefault();
    }
}
      if (document.querySelector('.main__wrapper').addEventListener) {
          // IE9, Chrome, Safari, Opera
          document.querySelector('.main__wrapper').addEventListener("mousewheel", scrollHorizontally, false);
          document.querySelector('.main__wrapper').addEventListener("ontouchmove", scrollHorizontally, false);
          // Firefox
          document.querySelector('.main__wrapper').addEventListener("DOMMouseScroll", scrollHorizontally, false);
      } else {
          // IE 6/7/8
          document.querySelector('.main__wrapper').attachEvent("onmousewheel", scrollHorizontally);
      }
