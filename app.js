
// HERO

const slides = document.querySelectorAll(".hero-backdrop")
let currHero = 0
const heroDelay = 10000

const setHeroHeight = () => {
  const nav = document.getElementById('nav-wrap');
  const navHeight = nav.offsetHeight;
  document.documentElement.style.setProperty('--nav-height', `${navHeight}px`);
}

window.addEventListener('load', setHeroHeight);
window.addEventListener('resize', setHeroHeight);

const showHeroSlides = () => {
  slides.forEach(hero => {
    hero.classList.remove("active");
  });

  currHero = (currHero + 1) % slides.length;
  slides[currHero].classList.add("active");

  setTimeout(showHeroSlides, heroDelay);
}

slides[0].classList.add("active");
setTimeout(showHeroSlides, heroDelay);