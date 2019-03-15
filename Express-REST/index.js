const http = require('http');

const config = require('./config');
const app  = require('./app');

const server = http.createServer(app);

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true});


server.on('error', (err) => {
  console.log(err.message);
});

server.listen(config.port, () => {
  console.log('Server started on port ' + config.port);
});
