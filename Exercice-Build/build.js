const fs = require('fs-extra');
const path = require('path');
const del = require('del');
const md5 = require('md5');
const UglifyJS = require('uglify-es');

const distPath = path.resolve(__dirname, 'dist');
const srcPath = path.resolve(__dirname, 'src');
const horlogeJsPath = path.resolve(srcPath, 'js', 'horloge.js');
const indexJsPath = path.resolve(srcPath, 'js', 'index.js');
const indexHtmlPath = path.resolve(srcPath, 'index.html');
const indexHtmlDistPath = path.resolve(distPath, 'index.html');
const appJsDistPath = path.resolve(distPath, 'app.js');

async function rmAndMkdir(dirPath) {
  await fs.remove(dirPath);
  await fs.mkdirp(dirPath);
  console.log('dist created');

}

async function buildJs() {
  const buffers = await Promise.all([
    fs.readFile(horlogeJsPath),
    fs.readFile(indexJsPath),
  ]);

  await fs.appendFile(appJsDistPath, Buffer.concat(buffers));

  console.log('JS built');
}

async function buildHtml() {
  let content = await fs.readFile(indexHtmlPath, 'UTF-8');

  content = content.replace(/<script.*<\/script>/s, '<script src="app.js"></script>');

  await fs.writeFile(indexHtmlDistPath, content);

  console.log('HTML built');
}

(async () => {
  await rmAndMkdir(distPath)
  await Promise.all([
    buildJs(),
    buildHtml(),
  ]);
  console.log('DONE');
})().catch(console.log);
