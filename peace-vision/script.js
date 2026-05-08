// ===== HERO SLIDER (FIXED) =====
const SLIDES = [
  "https://images.unsplash.com/photo-1519834785169-98be25ec3f84?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600&auto=format&fit=crop"
];

const slideEls = document.querySelectorAll('.hero-slide');
const dotEls   = document.querySelectorAll('.hero-dot');
let currentSlide = 0;

// Pre-load all images and set backgrounds
SLIDES.forEach((src, i) => {
  const img = new Image();
  img.onload = () => {
    slideEls[i].style.backgroundImage = `url('${src}')`;
    if (i === 0) slideEls[0].classList.add('active');
  };
  img.src = src;
});

function goToSlide(n) {
  slideEls[currentSlide].classList.remove('active');
  dotEls[currentSlide].classList.remove('active');
  currentSlide = (n + SLIDES.length) % SLIDES.length;
  slideEls[currentSlide].classList.add('active');
  dotEls[currentSlide].classList.add('active');
}

// Auto-advance
let sliderTimer = setInterval(() => goToSlide(currentSlide + 1), 5000);

// Dot clicks
dotEls.forEach(dot => {
  dot.addEventListener('click', () => {
    clearInterval(sliderTimer);
    goToSlide(+dot.dataset.slide);
    sliderTimer = setInterval(() => goToSlide(currentSlide + 1), 5000);
  });
});

// ===== PARALLAX =====
const heroParallax = document.getElementById('heroParallax');
const icBg = document.getElementById('icBg');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  // Hero parallax (slides move slower than scroll)
  if (heroParallax) {
    heroParallax.style.transform = `translateY(${scrollY * 0.35}px)`;
  }

  // Inner circle parallax
  if (icBg) {
    const rect = icBg.parentElement.getBoundingClientRect();
    const offset = (window.innerHeight / 2 - rect.top) * 0.15;
    icBg.style.transform = `translateY(${offset}px) scale(1.1)`;
  }
});

// ===== NAVBAR =====
const navbar = document.getElementById('navbar');
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  const icon = menuToggle.querySelector('i');
  icon.className = navLinks.classList.contains('open') ? 'fas fa-times' : 'fas fa-bars';
});

// Close menu on link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.querySelector('i').className = 'fas fa-bars';
  });
});

// ===== SCROLL REVEAL =====
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(
  '.reveal, .journey-card, .info-card'
).forEach(el => revealObserver.observe(el));

// ===== COUNTER =====
const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const target = +el.dataset.target;
    let count = 0;
    const step = target / 120;
    const tick = () => {
      count = Math.min(count + step, target);
      el.textContent = Math.ceil(count);
      if (count < target) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
    counterObserver.unobserve(el);
  });
}, { threshold: 0.5 });

document.querySelectorAll('.counter').forEach(c => counterObserver.observe(c));