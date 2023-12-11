const express = require('express');
const dotenv = require('dotenv').config
const cors = require('cors');
const app = express();
require('dotenv').config();

const postRouter = require('./routes/post.router');
const emailRouter = require('./routes/email.router');

app.use(express.urlencoded({ extended: false }));
const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
  }
app.use(cors(corsOptions));
app.use(express.json());

app.use("/api/v1/posts", postRouter);
app.use("/api/v1/emails", emailRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

