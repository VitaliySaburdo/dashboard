/**
 *  Open mobile menu
 */

const burgerMenu = document.querySelector('#burger-menu');
const mobilMenu = document.querySelector('#mobile-menu');

burgerMenu.addEventListener('click', () => {
  burgerMenu.classList.toggle('active');
  mobilMenu.classList.toggle('active');
});

/**
 *  Animation on start
 */

document.addEventListener('DOMContentLoaded', () => {
  const fadeInElements = document.querySelectorAll('.fade-in');

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  fadeInElements.forEach((element) => observer.observe(element));
});
