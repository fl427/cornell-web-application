// server/index.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')

const diseasesRouter = require('./routes/diseases-routes');
const diseasesRoutes = require('./routes/api/disease-routes');
const usersRoutes = require('./routes/api/users-routes');

const HttpError = require('./models/http-error');

const app = express();
app.use(cors()) // Use this after the variable declaration

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || `mongodb+srv://fan:lf9752915@cluster0-fqwuv.mongodb.net/diseases?retryWrites=true&w=majority`);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

app.use(bodyParser.json());

app.use('/diseases', diseasesRouter);
app.use('/api/diseases', diseasesRoutes);
app.use('/api/users', usersRoutes);

app.use((req, res, next) => {
  const error = new HttpError('Could not find this route.', 404);
  throw error;
})

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || 'An unknown error occurred!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`app is running on port ${PORT}`)
});
