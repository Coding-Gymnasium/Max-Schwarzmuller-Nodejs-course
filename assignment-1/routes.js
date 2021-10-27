const app = (req, res) => {
  const url = req.url;
  if (url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<body>');
    res.write('<h1>Hello World from Routes!</h1>');
    res.write('</body>');
    res.write('</html>');
    res.end();
  }

  if (url === '/users') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<body>');
    res.write('<h1>List of Users</h1>');
    res.write('<ul><li>Spongebob</li></ul>');
    res.write('<ul><li>Patrick</li></ul>');
    res.write('<ul><li>Sandy</li></ul>');
    res.write('<ul><li>Squidward</li></ul>');
    res.write('<ul><li>Mr. Krab</li></ul>');
    res.write('<ul><li>Plankton</li></ul>');
    res.write('</body>');
    res.write('</html>');
    res.end();
  }
};

exports.app = app;
