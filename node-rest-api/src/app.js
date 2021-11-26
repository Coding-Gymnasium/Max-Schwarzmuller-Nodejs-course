const express = require('express');

feedRoutes = require('./routes/feed');

const app = express();
app.use(express.json()); // application/json

app.use('/feed', feedRoutes);

app.listen(5000, () => {
  console.log('Server running on server 5000');
});
