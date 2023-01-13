let button = document.getElementById("button");

button.addEventListener("click", function() {
    alert("Your order has been placed.")
});

const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};


menu.addEventListener('click', mobileMenu);