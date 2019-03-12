/**
 * Salue une personne passé en paramètre
 * @param {string} name Le nom de la personne
 * @returns {string} Le message de salutation
 */
function hello(name) {
  return 'Bonjour ' + name;
}

const prenoms = ['Romain', 'Jean'];

for (let i = 0; i < prenoms.length; i++) {
  const prenom = prenoms[i];
  console.log(hello(prenom));
}
