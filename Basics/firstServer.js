const http = require('http');

const server = http.createServer((req, res) => {
  console.log('First web server');
  res.end('frist asdwew');
});

server.listen(3000, () => {
  console.log('Server is started.');
});