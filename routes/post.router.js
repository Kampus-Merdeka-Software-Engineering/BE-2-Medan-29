const express = require('express');
const router = express.Router();

const postController = require('../controller/post.controller');

router.get('/', postController.findAll);
router.get('/test', (req, res, next) => {
    res.json({
        message: 'Hello World!'
    })
})
module.exports = router;