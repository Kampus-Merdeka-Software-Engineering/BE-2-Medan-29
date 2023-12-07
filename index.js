const db = require('./database/index')
const express = require('express');
const dotenv = require('dotenv').config
const cors = require('cors');
const app = express();
require('dotenv').config();

const postRouter = require('./routes/post.router');

app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());

app.use("/api/v1/posts", postRouter);

const PORT = process.env.PORT || 3000;

db.sync({alter: true})
    .then(() => {
        console.log("Database connection established");
        app.listen(PORT, "0.0.0.0", () => {
            console.log(`Server is running on port ${PORT}.`);
        });
    })
    .catch(err => {
        console.log(err);
    })
