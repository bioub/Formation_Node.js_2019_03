const fs = require('fs-extra');
const path = require('path');

const logDirPath = path.resolve(__dirname, 'logs');
const logFilePath = path.resolve(logDirPath, 'app.log');

function log(filePath, msg) {
  msg = `${(new Date()).toISOString()} - ${msg}\n`
  return fs.appendFile(filePath, msg);
}

/*
(async function () {

  try {
    try {
      await fs.access(logDirPath)
    }
    catch (err) {
      if (err.code === 'ENOENT') {
        await fs.mkdir(logDirPath);
      }
      throw err;
    }
    await log(logFilePath, 'Ligne 1');
    await log(logFilePath, 'Ligne 2');
    await log(logFilePath, 'Ligne 3');
    await log(logFilePath, 'Ligne 4');
    console.log('Done');
  }
  catch (err) {
    console.log('Erreur pendant le log');
  }

})();
*/

async function ensureDir(logDirPath) {
  try {
    await fs.access(logDirPath)
  }
  catch (err) {
    if (err.code === 'ENOENT') {
      await fs.mkdir(logDirPath);
    }
    throw err;
  }
}

(async function () {

  try {
    await ensureDir(logDirPath);
    await log(logFilePath, 'Ligne 1');
    await log(logFilePath, 'Ligne 2');
    await log(logFilePath, 'Ligne 3');
    await log(logFilePath, 'Ligne 4');
    console.log('Done');
  }
  catch (err) {
    console.log('Erreur pendant le log');
  }

})();
