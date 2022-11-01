// Humbuerger
const humbuerger = document.querySelector('#humberger');
const navMenu = document.querySelector('#nav-menu');

humbuerger.addEventListener('click', function () {
  humbuerger.classList.toggle('humberger-active');
  navMenu.classList.toggle('hidden');
});

// navbar fixed
window.onscroll = function () {
  const header = document.querySelector('header');
  const fixednav = header.offsetTop;

  if (window.pageYOffset > fixednav) {
    header.classList.add('navbar-fixed');
  } else {
    header.classList.remove('navbar-fixed');
  }
};
