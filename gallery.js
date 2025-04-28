// Toggle image descriptions
function toggleDescription(card) {
    card.classList.toggle('active');
  }
  
  // Toggle theme
  function toggleTheme() {
    const html = document.documentElement;
    const current = html.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
  }
  