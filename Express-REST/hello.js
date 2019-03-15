// (function (exports, require, module, __filename, __dirname) {
'use strict';

/**
 * Salue une personne passé en paramètre
 * @param {string} name Le nom de la personne
 * @returns {string} Le message de salutation
 */
function hello(name) {
  return 'Bonjour ' + name;
}

// export via un identifiant global
// global.hello = hello;

// export local
// exports.hello = hello;

// remplacer export par hello
module.exports = hello;

// });
