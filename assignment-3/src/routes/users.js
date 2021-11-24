const express = require('express');
const { join } = require('path');
const path = require('path');
const router = express.Router();
const rootDir = require('../utils/path');

router.get('/', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'users.html'));
});

module.exports = router;
