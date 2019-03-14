const express = require('express');

const app = express();

app.use(express.json())

const contacts = [{
  prenom: 'Jean',
  id: 1
}, {
  prenom: 'Eric',
  id: 2
}, {
  prenom: 'Philippe',
  id: 3
}];

// Exercice, créer 5 URL

// GET /api/contacts
// retourne en JSON le tableau complet

// GET /api/contacts/:id
// retourne en JSON le contact dont l'id est dans l'URL

// POST /api/contacts
// insérer le contact passé en entrée (req.body) dans le tableau, lui affecter un id
// et retourner le contact avec son id
app.post('/api/contacts', (req, res) => {
  console.log(req.body);
  res.json(req.body);
})

// DELETE /api/contacts/:id
// supprimer le contact dont l'id est dans l'URL
// retourne en JSON le contact supprimé

// PUT /api/contacts/:id
// remplacer le contact dont l'id est dans l'URL par celui reçu dans le body
// retourne en JSON l'ancien contact


/*
app.get('/', (req, res) => {
  res.send('Hello');
});

app.get('/api/hello/:name', (req, res) => {
  res.json({
    msg: 'Hello ' + req.params.name,
  });
});
*/


app.listen(8080, () => {
  console.log('Server started');
});
