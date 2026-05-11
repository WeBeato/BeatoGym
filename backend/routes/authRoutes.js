// add modules
const express = require('express');
const authController = require('../controllers/authController')



const router = express.Router();


// route sign
router.post('/register', authController.register);

// route login
router.post('/login', authController.login)


module.exports = router;

