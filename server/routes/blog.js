const express = require('express');
const router = express.Router();

const blogController = require('../controllers/blog.js');
const authService = require('../services/auth.js');

router.get('/:id', blogController.getBlogById);

router.post(
  '',
  authService.checkJWT,
  authService.checkRole('siteOwner'),
  blogController.createBlog,
);

module.exports = router;
