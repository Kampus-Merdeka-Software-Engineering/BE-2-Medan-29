const express = require('express');
const router = express.Router();

const postController = require('../controller/post.controller');

router.get('/', postController.findAll);
router.get('/:id', postController.getById);
router.post('/', postController.create);
router.put('/:id', postController.update);
router.delete('/:id', postController.delete);

module.exports = router;