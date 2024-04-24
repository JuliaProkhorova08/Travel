const openMenu = () => {
  const header = document.querySelector('.nav');
  const navMenu = document.querySelector('.nav__menu');

  header.classList.remove('nav--nojs');

  navMenu.addEventListener('click', () => {
    if (header.classList.contains('nav--close')) {
      header.classList.remove('nav--close');
      header.classList.add('nav--open');
      disableScroll(); // Блокировка прокрутки при открытии меню
    } else {
      header.classList.add('nav--close');
      header.classList.remove('nav--open');
      enableScroll(); // Разблокировка прокрутки при закрытии меню
    }
  });

};

// Блокировка прокрутки страницы при открытом мобильном меню
function disableScroll() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
  document.body.style.position = 'fixed';
  document.body.style.top = `-${scrollTop}px`;
  document.body.style.left = `-${scrollLeft}px`;
}

// Разблокировка прокрутки страницы
function enableScroll() {
  const top = parseInt(document.body.style.top, 10);
  const left = parseInt(document.body.style.left, 10);
  document.body.style.position = '';
  document.body.style.top = '';
  document.body.style.left = '';
  window.scrollTo(-left, -top);
}

export { openMenu };
