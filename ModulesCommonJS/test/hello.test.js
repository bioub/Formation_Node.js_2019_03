// (function (exports, require, module, __filename, __dirname) {
'use strict';

// si exports.hello
// const hello = require('../hello').hello;
// const { hello } = require('../hello');

// si module.exports = hello
const hello = require('../hello');
const assert = require('assert');
const chalk = require('chalk');

try {
  assert.strictEqual(hello('Romain'), 'Bonjour Romain');
  console.log(chalk.green('Tests success'));
}
catch (err) {
  console.log(chalk.red('Tests failed'));
  console.log(err);
  process.exit(1);
}

// });
