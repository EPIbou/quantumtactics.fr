/* Quantum_Tactics.js
   Effets dynamiques pour renforcer l’ambiance spatiale du site Quantum Tactics
*/

// === 1. FOND D'ÉTOILES ANIMÉ ===
const starContainer = document.createElement('div');
starContainer.classList.add('stars');
document.body.appendChild(starContainer);

for (let i = 0; i < 100; i++) {
  const star = document.createElement('div');
  star.classList.add('star');
  star.style.left = `${Math.random() * 100}%`;
  star.style.top = `${Math.random() * 100}%`;
  star.style.animationDuration = `${5 + Math.random() * 10}s`;
  star.style.opacity = Math.random();
  starContainer.appendChild(star);
}

// === 2. EFFET ENERGÉTIQUE SUR LES TITRES ET LIENS ===
document.querySelectorAll('h1, h2, a').forEach(el => {
  el.addEventListener('mouseenter', () => {
    el.style.textShadow = '0 0 0.3px #00c6ff, 0 0 1px rgba(0,198,255,0.4)';
    el.style.transition = 'text-shadow 0.3s ease';
  });
  el.addEventListener('mouseleave', () => {
    el.style.textShadow = '';
  });
});


// === 3. ANIMATION D'APPARITION AU SCROLL ===
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('h1, h2, h3, p, a').forEach(el => {
  el.classList.add('hidden');
  observer.observe(el);
});

// === STYLES POUR LES ANIMATIONS ===
const style = document.createElement('style');
style.textContent = `
  .stars {
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    overflow: hidden;
    z-index: -1;
  }
  .star {
    position: absolute;
    width: 2px;
    height: 2px;
    background: rgba(255,255,255,0.8);
    border-radius: 50%;
    animation: twinkle infinite alternate;
  }
  @keyframes twinkle {
    from { transform: translateY(0); opacity: 0.3; }
    to { transform: translateY(10px); opacity: 1; }
  }
  .hidden {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.8s ease, transform 0.8s ease;
  }
  .visible {
    opacity: 1;
    transform: translateY(0);
  }
`;
document.head.appendChild(style);

// === 4. FLIP DES CARTES D'ÉQUIPE ===
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('flipped');
  });
});
