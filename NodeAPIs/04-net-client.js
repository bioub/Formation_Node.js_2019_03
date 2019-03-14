const net = require('net');

const socket = net.createConnection(80, 'www.example.com');

socket.pipe(process.stdout);

socket.on('connect', () => {
  socket.write('GET / HTTP/1.1\r\n');
  socket.write('Host: www.example.com\r\n');
  socket.end('\r\n');
});
