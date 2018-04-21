const noLoginRequired = [
  '/',
  '/api/signup',
  '/api/login',
  '/api/loggedInYet',
  '/api/logout',
  '/bundles.js'
];

const loggedOutRedirect = (req, res, next) => {
  if (req.user || noLoginRequired.includes(req.url)) {
    return next();
  } else {
    res.redirect('/');
  }
};

module.exports = loggedOutRedirect;