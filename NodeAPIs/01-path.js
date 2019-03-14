const path = require('path');

console.log(path.extname(__filename)); // .js

console.log(path.join('logs', '..', 'logs', 'app.log'));
console.log(path.join('logs/../logs/app.log'));
console.log(path.resolve('logs', '..', 'logs', 'app.log'));
console.log(path.resolve('logs/../logs/app.log'));


console.log(path.join(__dirname, 'logs', 'app.log'));
console.log(path.resolve(__dirname, 'logs', 'app.log'));

// on peut aussi changer de CWD (current working dir)
process.chdir(__dirname);
console.log(path.join('logs', '..', 'logs', 'app.log'));
console.log(path.join('logs/../logs/app.log'));
console.log(path.resolve('logs', '..', 'logs', 'app.log'));
console.log(path.resolve('logs/../logs/app.log'));

console.log(process.cwd());
