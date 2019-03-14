const fs = require('fs');
const path = require('path');

const logFilePath = path.resolve(__dirname, 'app.log');

function log(filePath, msg, cb) {
  msg = `${(new Date()).toISOString()} - ${msg}\n`
  fs.appendFile(filePath, msg, cb);
}

// Callback Hell / Pyramid of doom
log(logFilePath, 'Ligne 1', (err) => {
  if (err) {
    return console.log('Erreur pendant le log');
  }
  log(logFilePath, 'Ligne 2', (err) => {
    if (err) {
      return console.log('Erreur pendant le log');
    }
    log(logFilePath, 'Ligne 3', (err) => {
      if (err) {
        return console.log('Erreur pendant le log');
      }
      log(logFilePath, 'Ligne 4', (err) => {
        if (err) {
          return console.log('Erreur pendant le log');
        }
        console.log('Done');
      });

    });

  });

});
