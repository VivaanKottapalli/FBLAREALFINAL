const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};


menu.addEventListener('click', mobileMenu);


function SendMail () {
  var params = {
    email_id : document.getElementById("email").value,
  }
  emailjs.send('service_2pobilf', 'template_ktjrw9j', params).then(function (res) {
    alert("Sent! " + res.status)
  })
}