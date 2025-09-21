// mobile menu
const btn = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
if (btn && nav) {
  btn.addEventListener('click', () => nav.classList.toggle('open'));
}
// footer year
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();
