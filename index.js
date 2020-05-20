// server/index.js
const fs = require('fs');
const path = require('path');

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')

const dogsRoutes = require('./routes/dogs-routes');
const usersRoutes = require('./routes/users-routes');
const logsRoutes = require('./routes/logs-routes');
const commandsRoutes = require('./routes/commands-routes');
const logcommentsRoutes = require('./routes/logcomments-routes');
const vitalsRoutes = require('./routes/vitals-routes');

const HttpError = require('./models/http-error');

const app = express();
app.use(cors()) // Use this after the variable declaration

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || `mongodb+srv://fan:lf9752915@cluster0-fqwuv.mongodb.net/vet?retryWrites=true&w=majority`);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

app.use(bodyParser.json());

app.use('/api/logs', logsRoutes)
app.use('/api/commands', commandsRoutes)
app.use('/api/logcomments', logcommentsRoutes)
app.use('/api/vitals', vitalsRoutes)

app.use('/uploads/images', express.static(path.join('uploads', 'images')));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');

  next();
});


app.use('/api/dogs', dogsRoutes);
app.use('/api/users', usersRoutes);

if(process.env.NODE_ENV === 'production') {
  // Express will serve up prod assets
  // like the main.js file or main.css file
  app.use(express.static('client/build'));

  // Express will serve up the index.html file
  // if it doesn't recognize the route  
  const path = require('path');
  app.get('*', (req,res) => {
    res.sendFile(path.resolve(__dirname, 'client','build', 'index.html'));
  });
}

// app.use((req, res, next) => {
//   const error = new HttpError('Could not find this route.', 404);
//   throw error;
// })

// app.use((error, req, res, next) => {
//   if (req.file) {
//     fs.unlink(req.file.path, (err) => {
//       console.log(err);
//     });
//   }
//   if (res.headerSent) {
//     return next(error);
//   }
//   res.status(error.code || 500);
//   res.json({ message: error.message || 'An unknown error occurred!' });
// });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`app is running on port ${PORT}`)
});
