// Плавное появление блоков филиалов при скролле
const elements = document.querySelectorAll('.branch');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationDelay = '0.2s';
      entry.target.classList.add('visible');
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.2 });

elements.forEach(el => observer.observe(el));
