// app.js
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const productRouter = require('./routes/product');
const userRouter = require('./routes/user');
const cors = require('cors');
const port = process.env.PORT || 3000;

const app = express();

app.use(cors());

// Set up mongoose connection

const mongoDB = process.env.MONGODB_URI;

mongoose.connect(mongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.Promise = global.Promise;

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/auth', userRouter);
app.use('/user', userRouter);

db.once('open', function () {
  console.log('Connected!');
  app.listen(port, () => {
    console.log('Server is up and running on port ' + port);
  });
});

