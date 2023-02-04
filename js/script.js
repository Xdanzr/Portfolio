function burgir (i){
    let menuBtn = document.getElementById('menu');
    menuBtn.classList.toggle('active');
};

const hamburger = document.querySelector(".burger-menu");
const navMenu = document.querySelector('nav ul');

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    navMenu.classList.toggle("activett");
};
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("menu");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}