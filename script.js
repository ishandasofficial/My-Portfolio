// =========================
// Hamburger Menu Toggle
// =========================
const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');

hamburger.addEventListener('click', () => {
  sidebar.classList.toggle('active');
  hamburger.classList.toggle('open');
});

// Animate hamburger into X when open
hamburger.addEventListener('click', () => {
  const spans = hamburger.querySelectorAll('span');
  if (hamburger.classList.contains('open')) {
    spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
  } else {
    spans[0].style.transform = 'rotate(0) translate(0,0)';
    spans[1].style.opacity = '1';
    spans[2].style.transform = 'rotate(0) translate(0,0)';
  }
});

// Close sidebar on link click
document.querySelectorAll('#sidebar a').forEach(link => {
  link.addEventListener('click', () => sidebar.classList.remove('active'));
});

// =========================
// Ripple Effect
// =========================
document.querySelectorAll("a, button, .project-btn").forEach(el => {
  el.addEventListener("click", function(e) {
    const circle = document.createElement("span");
    circle.classList.add("ripple");
    const rect = this.getBoundingClientRect();
    circle.style.left = e.clientX - rect.left + "px";
    circle.style.top = e.clientY - rect.top + "px";
    this.appendChild(circle);
    setTimeout(() => circle.remove(), 600);
  });
});

// =========================
// Scroll Reveal
// =========================
const reveals = document.querySelectorAll(".reveal");
window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) el.classList.add("active");
  });
});

// =========================
// Typing Effect
// =========================
const text = ["AI/ML Enthusiast", "Full Stack Developer", "Data Analyst", "Freelancer"];
let i = 0, j = 0, currentText = "", isDeleting = false;

function typeEffect() {
  currentText = text[i];
  if (isDeleting) j--; else j++;
  document.getElementById("typing").textContent = currentText.substring(0, j);

  if (!isDeleting && j === currentText.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1000);
    return;
  }
  if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % text.length;
  }
  setTimeout(typeEffect, isDeleting ? 50 : 100);
}
typeEffect();

// =========================
// Scroll to Top Button
// =========================
const scrollBtn = document.getElementById("scrollToTop");
window.addEventListener("scroll", () => {
  scrollBtn.style.display = (window.scrollY > 300) ? "block" : "none";
});
scrollBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));