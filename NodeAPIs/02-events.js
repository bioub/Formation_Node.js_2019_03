const EventEmitter = require('events').EventEmitter;
const events = new EventEmitter();


function createUser(username) {
  // TODO write in DB
  process.nextTick(() => {
    events.emit('user.created', username);
  });
}

events.on('user.created', (username) => {
  console.log(username);
});

// Projet A
createUser('Romain');
createUser('Romain');
createUser('Romain');
createUser('Romain');

// Projet B
createUser('Romain');

console.log('Fin');
