const http = require('http');
const greeting = (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<body><h1>Hello World!</h1></body>');
  res.write('</html>');
  res.end();
};

const server = http.createServer(greeting);
server.listen(3000);
