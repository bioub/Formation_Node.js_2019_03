import { createInterface } from 'readline';
import { getRandomIntInclusive } from './random';

// 2 - Class
class Jeu {
  constructor(options = {}) {
    // options = options || {}; // 3 - default params
    // 4 - object destructuring (with default params)

    //const min = options.min || 0;
    //const max = options.max !== undefined ? options.max : 100;
    const {min = 0, max = 100} = options;

    this.entierAlea = getRandomIntInclusive(min, max);

    this.essais = [];
    this._rl = createInterface({
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

export default Jeu;
