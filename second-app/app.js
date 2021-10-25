const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  // process.exit(); // unless prompted to exit the server keeps running.
});

server.listen(3000);
