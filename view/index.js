const express = require('express');
const router = express.Router();

const controller = require('./controller');

router.get('/home', controller.home);
router.get('/about', controller.about);
router.get('/contact', controller.contact);
router.get('/joinus', controller.joinUs);
router.get('/team', controller.team);

module.exports = router;