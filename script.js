// Smooth scroll with prefers-reduced-motion fallback
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    if (id === '#') return;
    const target = document.querySelector(id);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: reduceMotion ? 'auto' : 'smooth',
        block: 'start',
      });
      const heading = target.querySelector('h1, h2, h3');
      if (heading) {
        heading.setAttribute('tabindex', '-1');
        heading.focus({ preventScroll: true });
      }
    }
  });
});

// Form submission
const form = document.getElementById('contactForm');
const note = document.getElementById('formNote');
if (form) {
  form.addEventListener('submit', async e => {
    e.preventDefault();
    note.textContent = '送出中…';
    note.classList.remove('success');

    const data = Object.fromEntries(new FormData(form).entries());
    console.log('[AI 落地師] Lead captured:', data);

    setTimeout(() => {
      note.classList.add('success');
      note.textContent = '✓ 收到 — 24 小時內回信確認時間';
      form.reset();
    }, 500);
  });
}
