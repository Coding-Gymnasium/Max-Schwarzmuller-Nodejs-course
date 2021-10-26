const http = require('http');
const routes = require('./routes');

const server = http.createServer(routes.greeting);
server.listen(3000);
