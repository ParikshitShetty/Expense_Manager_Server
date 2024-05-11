const { Router } = require('express');

// Import controller
const { 
    UsersGetterController,
    SignupController,
    LoginController, }  = require('../controllers/userController');

const router = Router();

router.route('/getter').get(UsersGetterController); 

router.route('/signup').post(SignupController); 
router.route('/login').post(LoginController); 

module.exports = router;