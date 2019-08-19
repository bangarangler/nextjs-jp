//require('dotenv').config()
const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');
// MIDDLEWARE
exports.checkJWT = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 15,
    jwksUri: process.env.JWKS_URI
  }),
  audience: process.env.AUTH0_CLIENT_ID,
  issuer: process.env.AUTH0_DOMAIN,
  algorithms: ["RS256"]
})
