const entries = document.querySelectorAll('.entry-item');

entries.forEach(entry => {
  entry.addEventListener('click', () => {
    const content = entry.nextElementSibling; // le contenu juste après l'entrée

    // Fermer tous les contenus sauf celui cliqué
    document.querySelectorAll('.entry-content').forEach(c => {
      if(c !== content) c.classList.remove('active');
    });

    // Désactiver toutes les entrées sauf celle cliquée
    entries.forEach(e => {
      if(e !== entry) e.classList.remove('active');
    });

    // Basculer l'entrée et son contenu
    entry.classList.toggle('active');
    content.classList.toggle('active');
  });
});
