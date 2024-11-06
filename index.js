const burgerMenu = document.querySelector('#burger-menu');
const mobilMenu = document.querySelector('#mobile-menu');

burgerMenu.addEventListener('click', () => {
  burgerMenu.classList.toggle('active');
  mobilMenu.classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', () => {
  const fadeInElements = document.querySelectorAll('.fade-in');

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // Unobserve to trigger animation only once
        }
      });
    },
    { threshold: 0.1 }
  );

  fadeInElements.forEach((element) => observer.observe(element));
});
