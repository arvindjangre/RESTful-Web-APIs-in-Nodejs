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