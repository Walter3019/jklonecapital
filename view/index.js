const express = require('express');
const router = express.Router();

const controller = require('./controller');

router.get('/:language/home', controller.home);

module.exports = router;