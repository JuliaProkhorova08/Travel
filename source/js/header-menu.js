const openMenu = () => {
  const header = document.querySelector('.nav');
  const navMenu = document.querySelector('.nav__menu');

  header.classList.remove('nav--nojs');

  navMenu.addEventListener('click', () => {
    if (header.classList.contains('nav--close')) {
      header.classList.remove('nav--close');
      header.classList.add('nav--open');
    } else {
      header.classList.add('nav--close');
      header.classList.remove('nav--open');
    }
  });
};

export { openMenu };
