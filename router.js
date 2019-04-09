const path = require('path');
const express = require('express');


module.exports = function (app) {
  const router = express.Router();

  router.use('/', require(path.join(__dirname, 'view')));

  app.use(router);
}
