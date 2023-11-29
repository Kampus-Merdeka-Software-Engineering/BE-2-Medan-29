const express = require('express');
const dotenv = require('dotenv').config
const cors = require('cors');
const app = express();
require('dotenv').config();

const postRouter = require('./routes/post.router');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api/v1/posts", postRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});