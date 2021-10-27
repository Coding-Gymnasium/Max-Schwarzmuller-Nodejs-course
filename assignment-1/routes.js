const app = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<body>');
    res.write('<h1>Hello World from Routes!</h1>');
    res.write(
      '<label>Add User</label><form action="/create-user" method="POST"><input type="text" name="Create User"><button type="submit">Send</button></form>'
    );
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

  if (url === '/create-user' && method === 'POST') {
    const body = [];

    req.on('data', (chunk) => {
      body.push(chunk);
      console.log(body);
    });

    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const name = parsedBody.split('=')[1];
      console.log(name);
    });
  }
};

exports.app = app;
