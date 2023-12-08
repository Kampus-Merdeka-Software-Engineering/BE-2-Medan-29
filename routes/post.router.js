const express = require('express');
const router = express.Router();

const postController = require('../controller/post.controller');
const emailController = require('../controller/email.controller');

router.get('/', postController.findAll);
router.get('/:id', postController.getById);
router.post('/', postController.create);
router.put('/:id', postController.update);
router.delete('/:id', postController.delete);
router.post('/', emailController.sendEmail);

module.exports = router;