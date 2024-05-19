const { Router } = require('express');

// Import controller
const { ExpensesGetterController }  = require('../controllers/expensesController');
const { ExpensesAdderController } = require('../controllers/expenseAdderController');
const { ExpensesRemoverController } = require('../controllers/expenseRemoveController');

// Import Middleware
const verifyToken = require('../middlewares/authMiddleware');

const router = Router();

// router.route('/getter').get(verifyToken,ExpensesGetterController); 

// router.route('/adder').post(verifyToken,ExpensesAdderController); 
// router.route('/remover').post(verifyToken,ExpensesRemoverController);

router.route('/getter').post(ExpensesGetterController); 

router.route('/adder').post(ExpensesAdderController); 
router.route('/remover').post(ExpensesRemoverController);

module.exports = router;