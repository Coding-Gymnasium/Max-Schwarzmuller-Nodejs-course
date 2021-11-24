const express = require('express');

const homeRoute = require('./routes/home');

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use('/', homeRoute);

app.listen(5000, () => console.log('server runing on http://localhost:5000'));
