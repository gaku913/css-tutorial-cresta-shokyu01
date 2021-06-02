const header = document.querySelector('header');
const mobileMenuIcon = document.querySelector('.mobile-menu-icon');

mobileMenuIcon.addEventListener('click', function() {
  header.classList.toggle('menu-open');
});