const http = require('http');

const data = [
  {
    id : 1,
    name: "john"
  },
  {
    id : 2,
    name: "john"
  },
  {
    id : 3,
    name: "john"
  },
];

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Content-Language', 'en-us');
  res.setHeader('Date', new Date(Date.now()));
  res.setHeader('X-Powered-By', 'Node.js');
  res.end(
    JSON.stringify({
      success: true,
      data : data,
      result : data.length
    })
  )
});

server.listen(3000, () => {
  console.log('Sever is started.');
})