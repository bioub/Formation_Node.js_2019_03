'use strict';

// 1 - Method properties
const random = {
  getRandom() {
    return Math.random();
  },
  getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  },
  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  },
  getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
  },
};

const readline = require('readline');

// 2 - Class
class Jeu {
  constructor(options = {}) {
    // options = options || {}; // 3 - default params
    // 4 - object destructuring (with default params)

    //const min = options.min || 0;
    //const max = options.max !== undefined ? options.max : 100;
    const {min = 0, max = 100} = options;

    this.entierAlea = random.getRandomIntInclusive(min, max);

    this.essais = [];
    this._rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  }

  jouer() {
    if (this.essais.length) {
      // 5 - Template string
      console.log(`Vous avez déjà joué : ${this.essais.join(' | ')}...`);
    }

    this._rl.question('Quel est le nombre ? ', (answer) => {
      // 6 - Number.parseInt et Number.isNaN
      const entierSaisi = Number.parseInt(answer);

      if (Number.isNaN(entierSaisi)) {
        console.log('Erreur : il faut saisir un nombre');
        return this.jouer();
      }

      this.essais.push(entierSaisi);

      if (entierSaisi < this.entierAlea) {
        console.log('Trop petit');
        return this.jouer();
      }

      if (entierSaisi > this.entierAlea) {
        console.log('Trop grand');
        return this.jouer();
      }

      console.log('Gagné !');
      this._rl.close();
    });
  }
}


const game = new Jeu({
  min: 10,
  max: 20,
});
game.jouer();
