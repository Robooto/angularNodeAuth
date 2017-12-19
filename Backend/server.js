const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const database = require('./repo/database');

// router
const postsController = require('./controllers/posts.controller');
const regController = require('./controllers/register.controller');


app.use(cors());
app.use(bodyParser.json());

app.use('/posts', postsController);
app.use('/register', regController);

// open the connection
database.open(() => {
});

app.listen(3000, () => console.log(`app running on port 3000`));