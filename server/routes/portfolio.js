const express = require('express');
const router = express.Router();

const portfolioController = require('../controllers/portfolio.js');
const authService = require('../services/auth.js');

router.post(
  '',
  authService.checkJWT,
  authService.checkRole('siteOwner'),
  portfolioController.savePortfolio,
);

router.get(
  '',
  authService.checkJWT,
  authService.checkRole('siteOwner'),
  portfolioController.getPortfolios,
);

module.exports = router;
