const express = require('express');
const router = express.Router();
const bookController = require('../controllers/book.js');

router.post('', bookController.saveBook);

router.get('', bookController.getBooks);

router.patch('/:id', bookController.updateBook);

router.delete('/:id', bookController.deleteBook);

module.exports = router;
