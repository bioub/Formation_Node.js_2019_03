const fs = require('fs');
const path = require('path');

const logDirPath = path.resolve(__dirname, 'logs');
const logFilePath = path.resolve(logDirPath, 'app.log');

function log(filePath, msg) {
  msg = `${(new Date()).toISOString()} - ${msg}\n`
  fs.appendFileSync(filePath, msg);
}

try {
  try {
    fs.accessSync(logDirPath)
  }
  catch (err) {
    if (err.code === 'ENOENT') {
      fs.mkdirSync(logDirPath);
    }
    throw err;
  }
  log(logFilePath, 'Ligne 1');
  log(logFilePath, 'Ligne 2');
  log(logFilePath, 'Ligne 3');
  log(logFilePath, 'Ligne 4');
  console.log('Done');
}
catch (err) {
  console.log('Erreur pendant le log');
}
