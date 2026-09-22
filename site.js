const menu = document.getElementById('mobileMenu');
const menuButton = document.querySelector('.hamburger');
function setMenu(open) {
  menu.classList.toggle('open', open);
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
}
menuButton.addEventListener('click', () => setMenu(!menu.classList.contains('open')));
menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
document.addEventListener('click', event => {
  if (!menu.contains(event.target) && !menuButton.contains(event.target)) setMenu(false);
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menu.classList.contains('open')) { setMenu(false); menuButton.focus(); }
});
window.matchMedia('(min-width: 901px)').addEventListener('change', event => { if (event.matches) setMenu(false); });
