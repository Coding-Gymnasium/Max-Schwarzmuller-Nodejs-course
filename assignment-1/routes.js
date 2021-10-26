const greeting = (req, res) => {
  const url = req.url;
  if (url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<body><h1>Hello World from Routes!</h1></body>');
    res.write('</html>');
    res.end();
  }
};

exports.greeting = greeting;
