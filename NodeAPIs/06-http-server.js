const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-type', 'text/plain');
  res.write('Hello');
  res.end();
});

// server.on('request', (req, res) => {
//   console.log(req.url + ' ' + req.method);

//   res.statusCode = 200;
//   res.setHeader('Content-type', 'text/plain');
//   res.write('Hello');
//   res.end();
// })

server.on('error', (err) => {
  console.log(err);
});

// server.on('listening', () => {
//   console.log('Server started on port 8080 !!!!');
// });

server.listen(8080, () => {
  console.log('Server started on port 8080 !!!!');
});
