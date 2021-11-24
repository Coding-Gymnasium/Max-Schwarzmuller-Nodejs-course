const express = require('express');
const path = require('path');

const homeRoute = require('./routes/home');
const usersRoute = require('./routes/users');

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', homeRoute);
app.use('/users', usersRoute);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(5000, () => console.log('server runing on http://localhost:5000'));
