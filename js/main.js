// Año del copyright
document.getElementById('year').textContent = new Date().getFullYear();

// Menú móvil
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
	const open = menu.classList.toggle('open');
	menuToggle.setAttribute('aria-expanded', open);
});

// Pulso neón temporal sobre el enlace "Portfolio" (solo en la home)
const hint = document.querySelector('.menu a.hint');

if (hint) {
	setTimeout(() => hint.classList.remove('hint'), 5000);
}
