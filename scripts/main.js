const header = document.querySelector('header');
const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
const menuLinks = document.querySelectorAll('.menu a');

const menuOpenToggle = function() {
  header.classList.toggle('menu-open');
}

const menuClose = function() {
  header.classList.remove('menu-open');
}

mobileMenuIcon.addEventListener('click', menuOpenToggle);

menuLinks.forEach(menuLink => {
  menuLink.addEventListener('click', menuClose);
});
