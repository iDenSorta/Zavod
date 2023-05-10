// Менюшка header

let menuBtn = document.querySelector(".menu__btn");
let menuWrapper = document.querySelector(".menu-nav");
let menulogo = document.querySelector(".logo");

menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("active");
  menuWrapper.classList.toggle("active");
  menulogo.classList.toggle("active");
});
