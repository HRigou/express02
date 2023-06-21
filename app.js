const express = require('express');
const app = express();

// Données
const users = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Smith' },
  { id: 3, name: 'Bob Johnson' }
];

// Route pour obtenir la liste des utilisateurs
app.get('/api/users', (req, res) => {
  res.status(200).json(users);
});

// Route pour obtenir un utilisateur par ID
app.get('/api/users/:id', (req, res) => {
  const id = parseInt(req.params.id);

  const user = users.find(user => user.id === id);

  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json({ message: 'Not Found' });
  }
});

// Démarrer le serveur
app.listen(3000, () => {
  console.log('Serveur en cours d\'exécution sur le port 3000');
});
