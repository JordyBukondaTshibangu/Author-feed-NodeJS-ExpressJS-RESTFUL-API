const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/user')
const { validationResult} = require('express-validator/check')

exports.signup = async (req, res, next ) =>{
    console.log('hello')
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        const error = new Error('Validation Failed')
        error.statusCode = 422
        error.data = errors.array()
        throw error
    }
    const email = req.body.email
    const name = req.body.name
    const password = req.body.password
    let newUser

try {
   const hashedPassword = await  bcrypt.hash(password, 8)

        const user = new User({  email,  name, password : hashedPassword })
        newUser = user
        const exinstingUser = await User.findOne({email : email})

        if(exinstingUser){
            console.log('User exist already !!!')
            return 
        }
        const result = await newUser.save()

        res.status(201).json({
            message : 'User created ',
            userId : result._id
        })
} catch(err) {
        if (!err.statusCode) {
            err.statusCode = 500;
          }
          next(err);
}

}

exports.login = async (req, res, next) => {
    const email = req.body.email
    const password = req.body.password
    let loadedUser

    try {
     const user = await User.findOne({email})
        if(!user){
            const error = new Error('A user with this email could not be found ')
            error.statusCode = 401
            throw error
        }
        loadedUser = user

     const isMatch = await  bcrypt.compare(password, user.password)
        if(!isMatch){
            const error = new Error('Wrong Password')
            error.statusCode = 401
            throw error
        }
    const token = jwt.sign(
            {
                email : loadedUser.email, 
                userId : loadedUser._id.toString()
            }, 
            'somesecretkeythatonlytheserverknows',
            { expiresIn : '1h'}
        )
        res.status(200).json({
            token, 
            userId : loadedUser._id.toString()
        })
    }catch(err) {
        if (!err.statusCode) {
            err.statusCode = 500;
          }
          next(err) 
    }
}

exports.getUserStatus = async (req, res, next ) => {
    const id = req.userId
try {
    const user = await User.findById(id)
        if(!user){
            const error = new Error('There was no user found')
            error.statusCode = 404;
            throw error
        }
        const status = user.status
        res.status(200).json({
            message : 'User Status',
            status
        })
    }catch(err) {
        if (!err.statusCode) {
            err.statusCode = 500;
          }
          next(err) 
    }
}