process.stdout.write('Hello ');
process.stdout.write('Romain\n');

const fs = require('fs');
const zlib = require('zlib');
const readline = require('readline');

// Readable Stream
const rs = fs.createReadStream('.editorconfig');

// Transform Stream
const gzip = zlib.createGzip();

// Writeable Stream
const ws = fs.createWriteStream('.editorconfig.zip');

// Duplex Stream (Readable + Writeable)

/*
rs.on('open', (fd) => {

});
*/

// cat .editorconfig | gzip > .editorconfig.zip
rs.pipe(gzip).pipe(ws);


const rl = readline.createInterface({
  input: rs,
});

let n = 0;
rl.on('line', (line) => {
  console.log(++n + ' ' + line);
});
