const Jeu = require('./jeu');
const config = require('./config');

const game = new Jeu(config);
game.jouer();
