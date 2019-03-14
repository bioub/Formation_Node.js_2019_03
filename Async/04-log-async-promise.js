const fs = require('fs-extra');
const path = require('path');

const logDirPath = path.resolve(__dirname, 'logs');
const logFilePath = path.resolve(logDirPath, 'app.log');

function log(filePath, msg) {
  msg = `${(new Date()).toISOString()} - ${msg}\n`
  return fs.appendFile(filePath, msg);
}

// fs.access + fs.mkdir si code === ENOENT
// -> fs.ensureDir(logDirPath) dans fs-extra
fs.access(logDirPath)
  .catch((err) => {
    if (err.code === 'ENOENT') {
      return fs.mkdir(logDirPath);
    }
    throw err;
  })
  .then(() => log(logFilePath, 'Ligne 1'))
  .then(() => log(logFilePath, 'Ligne 2'))
  .then(() => log(logFilePath, 'Ligne 3'))
  .then(() => log(logFilePath, 'Ligne 4'))
  .then(() => console.log('Done'))
  .catch(console.log);

