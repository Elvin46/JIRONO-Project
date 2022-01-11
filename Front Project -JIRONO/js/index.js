// ----------STICKY NAVBAR----------
var navbar = document.querySelector("header");
var sticky = 45
function myFunction() {
  if (window.scrollY >= sticky) {
    navbar.classList.add("sticky-nav")
  }
  if (window.scrollY < sticky) {
    navbar.classList.remove("sticky-nav")
  }
}
window.onscroll = function() {myFunction()};

// ----------HAMBURGER ANIMATION----------
const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});
const btn = document.querySelector(".menu-btn")
const collapse = document.querySelector(".nav-menu-collapse")
btn.addEventListener('click' , function() {
    collapse.classList.toggle("visible")
});