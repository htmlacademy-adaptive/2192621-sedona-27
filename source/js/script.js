let nav = document.querySelector('.nav');
let navToggle = document.querySelector('.nav__toggle');
let headerLogo = document.querySelector('.header__logo');

nav.classList.remove('nav--nojs');
headerLogo.classList.remove('header__logo--nojs');

navToggle.addEventListener('click', function () {
  if (nav.classList.contains('nav--closed')) {
    nav.classList.remove('nav--closed');
    nav.classList.add('nav--opened');
  } else {
    nav.classList.add('nav--closed');
    nav.classList.remove('nav--opened');
  }
});


