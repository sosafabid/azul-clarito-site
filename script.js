document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initCarousel();
  initReveal();
});

function initReveal() {
  const items = document.querySelectorAll('[data-reveal]');
  if (!items.length) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion || !('IntersectionObserver' in window)) {
    items.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2, rootMargin: '0px 0px -40px 0px' }
  );
  items.forEach((el) => observer.observe(el));
}

function initNav() {
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  if (!toggle || !links) return;

  toggle.addEventListener('click', () => {
    const isOpen = links.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  links.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      links.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

/**
 * Galería / carrusel automático.
 * Busca assets/gallery/foto-1.jpg, foto-2.jpg, ... foto-MAX_PHOTOS.jpg
 * y arma el carrusel solo con las que existan. No hay que tocar código:
 * simplemente agregá archivos con ese nombre a assets/gallery/.
 */
async function initCarousel() {
  const carousel = document.getElementById('carousel');
  const track = document.getElementById('carouselTrack');
  const dotsWrap = document.getElementById('carouselDots');
  const prevBtn = document.getElementById('carouselPrev');
  const nextBtn = document.getElementById('carouselNext');
  if (!carousel || !track) return;

  const MAX_PHOTOS = 12;

  const found = await Promise.all(
    Array.from({ length: MAX_PHOTOS }, (_, i) => i + 1).map(
      (n) =>
        new Promise((resolve) => {
          const src = `assets/gallery/foto-${n}.jpg`;
          const img = new Image();
          img.onload = () => resolve(src);
          img.onerror = () => resolve(null);
          img.src = src;
        })
    )
  );
  const photos = found.filter(Boolean);

  if (photos.length === 0) {
    return; // deja el estado "Fotos próximamente" que ya está en el HTML
  }

  track.innerHTML = photos
    .map(
      (src, i) =>
        `<img class="carousel__slide${i === 0 ? ' is-active' : ''}" src="${src}" alt="Azul Clarito — foto ${i + 1}">`
    )
    .join('');
  const slides = Array.from(track.querySelectorAll('.carousel__slide'));

  if (photos.length === 1) return; // una sola foto: sin flechas ni puntos

  prevBtn.hidden = false;
  nextBtn.hidden = false;
  dotsWrap.innerHTML = photos
    .map((_, i) => `<button class="carousel__dot${i === 0 ? ' is-active' : ''}" aria-label="Ir a foto ${i + 1}"></button>`)
    .join('');
  const dots = Array.from(dotsWrap.querySelectorAll('.carousel__dot'));

  let current = 0;
  function show(index) {
    slides[current].classList.remove('is-active');
    dots[current].classList.remove('is-active');
    current = (index + photos.length) % photos.length;
    slides[current].classList.add('is-active');
    dots[current].classList.add('is-active');
  }

  prevBtn.addEventListener('click', () => show(current - 1));
  nextBtn.addEventListener('click', () => show(current + 1));
  dots.forEach((dot, i) => dot.addEventListener('click', () => show(i)));

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduceMotion) {
    let timer = setInterval(() => show(current + 1), 5000);
    carousel.addEventListener('mouseenter', () => clearInterval(timer));
    carousel.addEventListener('mouseleave', () => {
      timer = setInterval(() => show(current + 1), 5000);
    });
  }
}
