const { Router } = require('express');

// Import controller
const { CategoryController }  = require('../controllers/categoryController');

const router = Router();

router.route('/getter').get(CategoryController); 

module.exports = router;