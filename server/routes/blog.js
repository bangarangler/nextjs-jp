const express = require('express');
const router = express.Router();

const blogController = require('../controllers/blog.js');
const authService = require('../services/auth.js');

router.get('', blogController.getBlogs);

router.get(
  '/me',
  authService.checkJWT,
  authService.checkRole('siteOwner'),
  blogController.getUserBlogs,
);

router.get('/s/:slug', blogController.getBlogBySlug);

router.get('/:id', blogController.getBlogById);

router.post(
  '',
  authService.checkJWT,
  authService.checkRole('siteOwner'),
  blogController.createBlog,
);

router.patch(
  '/:id',
  authService.checkJWT,
  authService.checkRole('siteOwner'),
  blogController.updateBlog,
);

router.delete(
  '/:id',
  authService.checkJWT,
  authService.checkRole('siteOwner'),
  blogController.deleteBlog,
);

module.exports = router;
