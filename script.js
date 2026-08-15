// Smooth scroll for anchor links (fallback for older browsers)
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    if (id === '#') return;
    const target = document.querySelector(id);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Form submission handler
const form = document.getElementById('contactForm');
const note = document.getElementById('formNote');
if (form) {
  form.addEventListener('submit', async e => {
    e.preventDefault();
    note.classList.remove('success');
    note.textContent = '送出中…';

    const data = Object.fromEntries(new FormData(form).entries());
    // For now, log to console (no backend wired up yet)
    console.log('[AI 落地師] Lead captured:', data);

    // Simulate success
    setTimeout(() => {
      note.classList.add('success');
      note.textContent = '✓ 收到!我會在 24 小時內回信確認時間。';
      form.reset();
    }, 600);
  });
}

// Intersection-based fade-in for cards (subtle animation)
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.card-prob, .card-feat, .ladder-step, .pillar, .big-stat, .faq-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});
