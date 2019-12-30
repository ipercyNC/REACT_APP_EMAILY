const passport = require('passport');
const path = require('path');

module.exports = (app) =>{
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get(
    '/auth/google/callback',
    passport.authenticate('google')
  );
  app.get('/api/logout', (req, res) => {
    req.logout();
    res.send(req.user); // user will be logged out and get back result
  });

  app.get(
    '/api/current_user',
    (req, res) => {
      res.send(req.user);
    }
  );
  app.get('/google181d5db1eb9426de.html',
  (req, res) => {
    res.sendFile('../google181d5db1eb9426de.html');
  });


};
