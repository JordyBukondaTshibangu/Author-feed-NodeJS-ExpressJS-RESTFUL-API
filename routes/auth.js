const express = require('express')
const router = express.Router()
const { check } =  require('express-validator/check')
const User = require('../models/user')
const authController = require('../controllers/auth')
const isAuth = require('../middleware/isAuth')

router.put('/signup',[
    check('email')
        .isEmail()
        .withMessage('Please enter a valid email address')
        // .custom((value, {req}) => {
        //     User.findOne({email : value}).then(userDoc => {
        //         if(userDoc){
        //             return Promise.reject('E-mail address already exists !')
        //         }
        //     })
        // })
        .normalizeEmail(),
    check('password').trim().isLength({min : 5}),
    check('name').trim().not().isEmpty()  
], authController.signup)

router.post('/login', authController.login)
router.get('/status',isAuth, authController.getUserStatus)

module.exports = router