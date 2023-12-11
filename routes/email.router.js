const express = require('express');
const router = express.Router();

const emailController = require('../controller/email.controller');

router.post('/', emailController.sendBeritaEmail);
router.post('/subscribe', emailController.subscribe);


module.exports = router;
