document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Publication topic filter (filter bar buttons and per-paper tags)
  const filterBtns = document.querySelectorAll('.filter-btn');
  const pubs = document.querySelectorAll('.pub');
  const applyFilter = (tag) => {
    filterBtns.forEach(b => b.classList.toggle('is-active', b.dataset.tag === tag));
    pubs.forEach(p => {
      const tags = (p.dataset.tags || '').split(',').filter(Boolean);
      p.style.display = tag === 'all' || tags.includes(tag) ? '' : 'none';
    });
  };
  document.querySelectorAll('.filter-btn, .tag').forEach(btn => {
    btn.addEventListener('click', () => applyFilter(btn.dataset.tag));
  });

  // Night mode toggle (initial mode is set inline in <head>)
  const root = document.documentElement;
  const toggle = document.querySelector('.mode-toggle');
  const syncLabel = () => { if (toggle) toggle.textContent = root.classList.contains('dark') ? 'Day' : 'Night'; };
  syncLabel();
  toggle?.addEventListener('click', () => {
    const dark = root.classList.toggle('dark');
    try { localStorage.setItem('site-mode', dark ? 'dark' : 'light'); } catch (e) {}
    syncLabel();
  });
});
