/* nav.js — Menú lateral responsive */
(function () {
  const navToggle  = document.getElementById('navToggle');
  const navLinks   = document.getElementById('navLinks');
  const navOverlay = document.getElementById('navOverlay');
  const navClose   = document.getElementById('navClose');

  if (!navToggle || !navLinks) return;

  const openNav = () => {
    navLinks.classList.add('active');
    if (navOverlay) navOverlay.classList.add('active');
    navToggle.setAttribute('aria-expanded', 'true');
    document.body.classList.add('nav-open');
  };

  const closeNav = () => {
    navLinks.classList.remove('active');
    if (navOverlay) navOverlay.classList.remove('active');
    navToggle.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('nav-open');
  };

  navToggle.addEventListener('click', () => {
    navLinks.classList.contains('active') ? closeNav() : openNav();
  });

  if (navOverlay) navOverlay.addEventListener('click', closeNav);
  if (navClose)  navClose.addEventListener('click', closeNav);

  // Cierra al hacer clic en cualquier enlace (útil en móvil)
  navLinks.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', closeNav)
  );

  // Cierra con Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeNav();
  });

  // Cierra si se agranda la pantalla a escritorio
  window.addEventListener('resize', () => {
    if (window.innerWidth > 900) closeNav();
  });
})();