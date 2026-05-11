// Hamburger & Sidebar
const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const spans = hamburger.querySelectorAll('span');

function toggleMenu(open) {
  sidebar.classList.toggle('active', open);
  overlay.classList.toggle('active', open);
  hamburger.classList.toggle('open', open);
}

hamburger.addEventListener('click', () => toggleMenu(!sidebar.classList.contains('active')));
overlay.addEventListener('click', () => toggleMenu(false));
document.querySelectorAll('#sidebar a').forEach(l => l.addEventListener('click', () => toggleMenu(false)));

// Scroll Reveal
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('active'); });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Scroll to Top
const scrollBtn = document.getElementById('scrollToTop');
window.addEventListener('scroll', () => {
  scrollBtn.style.display = scrollY > 300 ? 'flex' : 'none';
});
scrollBtn.addEventListener('click', () => scrollTo({ top: 0, behavior: 'smooth' }));