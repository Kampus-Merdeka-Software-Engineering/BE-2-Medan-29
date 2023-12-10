const express = require('express');
const router = express.Router();

const SubscriptionController = require('../controller/email.controller');
const postController = require('../controller/post.controller');

router.get('/', postController.findAll);
router.get('/:id', postController.getById);
router.post('/', postController.create);
router.put('/:id', postController.update);
router.delete('/:id', postController.delete);

router.post('/subscribe', SubscriptionController.subscribe);
router.post('/send-news', SubscriptionController.sendBerita);

module.exports = router;