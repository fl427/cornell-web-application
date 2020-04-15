// server/index.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')

const diseasesRouter = require('./routes/diseases');
const usersRouter = require('./routes/user');

const app = express();
app.use(cors()) // Use this after the variable declaration

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost:27017/canine`);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

app.use(bodyParser.json());

app.use('/diseases', diseasesRouter);
app.use('/users', usersRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`app is running on port ${PORT}`)
});
