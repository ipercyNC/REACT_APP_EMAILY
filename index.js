const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
//const keys = require('./config/keys.js');
require('./models/User');
//require('./services/passport');

const path = require('path');
const dirPath = path.join(__dirname, '/google181d5db1eb9426de.html');


//mongoose.connect(keys.mongoURI);

const app = express();
/*
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, //milliseconds in 30 days
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());
*/
//require('./routes/authRoutes')(app);

app.get('/google181d5db1eb9426de.html',
(req, res) => {
  res.sendFile(dirPath);
});
const PORT = process.env.PORT || 5000;
app.listen(PORT);
