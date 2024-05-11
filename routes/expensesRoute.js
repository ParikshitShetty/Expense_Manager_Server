const { Router } = require('express');

// Import controller
const { 
    ExpensesAdderController,
    ExpensesGetterController, }  = require('../controllers/expensesController');

const router = Router();

router.route('/getter').get(ExpensesGetterController); 
router.route('/adder').post(ExpensesAdderController); 

module.exports = router;