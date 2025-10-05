document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Tabs
  const tabs = document.querySelectorAll('.tab');
  const panels = document.querySelectorAll('.tab-panel');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const id = tab.getAttribute('data-tab');
      tabs.forEach(t => t.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      const panel = document.getElementById(id);
      if (panel) panel.classList.add('active');
      // Scroll to top of content on tab switch
      document.querySelector('.content')?.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Fancy cursor ring
  const ring = document.getElementById('cursorRing');
  if (ring) {
    document.addEventListener('mousemove', (e) => {
      ring.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    });
    document.addEventListener('mousedown', () => ring.style.borderColor = '#ffe8c6');
    document.addEventListener('mouseup', () => ring.style.borderColor = 'var(--cream)');
  }
});


