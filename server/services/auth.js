//require('dotenv').config()
const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

//const namespace = process.env.NAMESPACE;

// MIDDLEWARE
exports.checkJWT = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 50,
    jwksUri: process.env.JWKS_URI,
  }),
  audience: process.env.AUTH0_CLIENT_ID,
  issuer: process.env.AUTH0_DOMAIN,
  algorithms: ['RS256'],
});

exports.checkRole = role => (req, res, next) => {
  const user = req.user;

  if (user && (user[`${process.env.NAMESPACE}/role`] === role)) {
    next();
  } else {
    return res
      .status(401)
      .send({
        title: 'Not Authorized',
        details: 'You are not authorized to access this data.',
      });
  }
};
