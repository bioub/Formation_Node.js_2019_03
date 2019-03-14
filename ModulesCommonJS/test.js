const fs = require('fs');

fs.readdirSync('./test')
  .filter((filename) => filename.endsWith('.test.js'))
  .forEach((filename) => require(`./test/${filename}`));
