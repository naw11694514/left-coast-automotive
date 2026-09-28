const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

menuButton?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.main-nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('serviceForm')?.addEventListener('submit', (event) => {
  event.preventDefault();

  const data = new FormData(event.currentTarget);
  const name = data.get('name') || '';
  const vehicle = data.get('vehicle') || '';
  const location = data.get('location') || '';
  const message = data.get('message') || '';

  const subject = encodeURIComponent(`Service request — ${vehicle}`);
  const body = encodeURIComponent(
`Name: ${name}
Vehicle: ${vehicle}
Location: ${location}

What the vehicle is doing:
${message}`
  );

  window.location.href = `mailto:info@leftcoastautomotive.com?subject=${subject}&body=${body}`;
});
