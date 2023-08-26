const http = require('http');

const server = http.createServer((req, res) => {
  console.log('First web server');
  res.end('first web server response');
});

server.listen(3000, () => {
  console.log('Server is started.');
});