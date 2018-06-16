const http = require('http');
const logEmitter = require('./log').emitter;
const port = 8080;

const server = http.createServer((req, res) => res.end('Hello World'));

server.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});

server.on('request', incomingMessage => logEmitter.emit('request', incomingMessage));