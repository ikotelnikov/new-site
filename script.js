const heroVisual = document.querySelector('.hero-visual');

if (heroVisual) {
  const setOrigin = (x, y) => {
    heroVisual.style.setProperty('--mx', `${x}%`);
    heroVisual.style.setProperty('--my', `${y}%`);
  };

  heroVisual.addEventListener('pointermove', (event) => {
    const rect = heroVisual.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    setOrigin(Math.min(100, Math.max(0, x)), Math.min(100, Math.max(0, y)));
  });

  heroVisual.addEventListener('pointerleave', () => setOrigin(50, 50));
}
