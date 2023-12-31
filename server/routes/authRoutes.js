const passport = require('passport');

module.exports = function(app) {
  app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
  })
  )
  
  app.get('/auth/google/callback', passport.authenticate('google'),  (req, res) => {
    res.redirect('http://localhost:3004/surveys')
  })

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('http://localhost:3004')
  })

  app.get('/api/current_user', (req, res) => {
    res.send(req.user)
  })
}