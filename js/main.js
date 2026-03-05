// =============================================
// main.js — Dev 1
// Rama: feature/navbar
// Responsable: interacciones del navbar
// =============================================

// ── SUBNAV: marcar enlace activo al hacer clic ──
const subnavLinks = document.querySelectorAll('.subnav__list li a');

subnavLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    subnavLinks.forEach(l => l.classList.remove('active'));
    this.classList.add('active');
  });
});

// ── NAVBAR: ocultar/mostrar al hacer scroll ──
let lastScrollY = window.scrollY;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY && currentScrollY > 80) {
    // Scrolleando hacia abajo → ocultar navbar
    header.style.transform = 'translateY(-100%)';
    header.style.transition = 'transform 0.3s ease';
  } else {
    // Scrolleando hacia arriba → mostrar navbar
    header.style.transform = 'translateY(0)';
    header.style.transition = 'transform 0.3s ease';
  }

  lastScrollY = currentScrollY;
});

// ── NAVBAR: sincronizar input de búsqueda con el hero (Dev 2) ──
// Cuando el usuario escribe en el input del navbar,
// el valor se refleja en el buscador principal de Dev 2.
const navSearchInput = document.getElementById('nav-search');

if (navSearchInput) {
  navSearchInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      const heroInput = document.getElementById('search-input');
      if (heroInput) {
        heroInput.value = this.value;
        // Desplazar a la sección del buscador
        document.getElementById('buscador')?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
}
