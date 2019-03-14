const fs = require('fs');

// Version synchrone
// simple à écrire, mais pas adapté à une exécution parallèle
// (code serveur, lecture de plusieurs fichiers en même temps...)
try {
  const buffer = fs.readFileSync('.editorconfig');
  console.log(buffer.toString());
} catch (err) {
  console.log(err);
}

// Version asynchrone basée sur les callbacks Node.js
// sur un enchainement d'opération -> callback hell
// adapté à une exécution parallèle car non bloquant
fs.readFile('.editorconfig', (err, buffer) => {
  if (err) {
    return console.log(err);
  }
  console.log(buffer.toString());
});

// Version asynchrone basée sur les promesses
// adaptée à une exécution parallèle et les enchainements async
fs.promises.readFile('.editorconfig')
  .then((buffer) => console.log(buffer.toString()))
  .catch((err) => console.log(err));

// Version asynchrone basée sur les promesses + async function
// adaptée à une exécution parallèle et les enchainements async
(async () => {
  try {
    const buffer = await fs.promises.readFile('.editorconfig');
    console.log(buffer.toString());
  } catch (err) {
    console.log(err);
  }
})();

// Version asynchrone hybride promesse + async function
(async () => {
  const buffer = await fs.promises.readFile('.editorconfig');
  console.log(buffer.toString());
})().catch(console.log);
