const hero = document.querySelector('.hero');
const title = document.querySelector('[data-scribble]');
hero.addEventListener('mousemove', e => {
  const x = (e.clientX / innerWidth - .5) * 8;
  const y = (e.clientY / innerHeight - .5) * 5;
  title.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) rotate(-3deg)`;
});
const observer = new IntersectionObserver(entries => entries.forEach(entry => {
  if(entry.isIntersecting) entry.target.classList.add('visible');
}), {threshold:.12});
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
