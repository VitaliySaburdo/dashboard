const burgerMenu = document.querySelector('#burger-menu');
const mobilMenu = document.querySelector('#mobile-menu');

burgerMenu.addEventListener('click', () => {
  burgerMenu.classList.toggle('active');
  mobilMenu.classList.toggle('active');
});
