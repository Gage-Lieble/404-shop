const heroImages = ["../assets/img/heros/hero-mtn.jpg", "../assets/img/heros/hero-stag.jpg", "../assets/img/heros/hero-tower.png"];
let currHero = 0
const setHeroHeight = () => {
  const nav = document.getElementById('nav-wrap');
  const navHeight = nav.offsetHeight;
  document.documentElement.style.setProperty('--nav-height', `${navHeight}px`);
}

window.addEventListener('load', setHeroHeight);
window.addEventListener('resize', setHeroHeight);

