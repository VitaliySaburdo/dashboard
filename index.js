const burgerMenu = document.querySelector('#burger-menu');
const mobilMenu = document.querySelector('#mobile-menu');

console.log(burgerMenu);
console.log(mobilMenu);

burgerMenu.addEventListener('click', () => {
  burgerMenu.classList.toggle('active');
  mobilMenu.classList.toggle('active');
});
