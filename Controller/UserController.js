const User = require('../Models/UsersModel');
const AppError = require('../utils/AppError');
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const validator = require('validator');

exports.userSignUp = async (req, res, next) => {
    try {
        const { email, name, password } = req.body

        let user = await User.findOne({ email });

        if (user) {
          return res.status(400).json({
              error: 'this user already exists'
          })
        }

        const avatar = gravatar.url(email, {
            s: '200',
            r: 'pg',
            d: 'mm'
        });

        user = new User({
            name,
            email,
            avatar,
            password
        });

        const salt = await bcrypt.genSalt(10)
        
        user.password = await bcrypt.hash(password, salt);

        const newUser = await user.save()

        //? create jwt and send to user 
        const payload = {
            user: {
                id: newUser.id
            }
        }

        jwt.sign(payload, process.env.JWTSECRET, {
            expiresIn: 360000
        }, (err, token) => {
            if (err) throw err;
            // console.log(token)
            res.status(201).json({
                success: true,
                token
            })
        })

    } catch (err) {
      console.log(err)
    }
};


exports.userLogin = async (req, res, next) => {
    try {
        const { email, password } = req.body

        if (!email || !password) {
            return res.status(400).json({
                error: `email or password is required`
            })
        }
        
        const isEmailInCorrectForm = validator.isEmail(email)
        
        if (!isEmailInCorrectForm) {
            return res.status(400).json({
                error: `Invalid Email Format`
            })
        }
        

        const user = await User.findOne({ email }).select('+password')

        if (!user) {
          return res.status(400).json({
              error: `Invalid email or password`
          })
        }
        
        const isPassMatched = await bcrypt.compare(password, user.password)
        
        if (!isPassMatched) {
          return res.status(400).json({
              error: `Invalid email or password`
          })
        }


        //? create jwt and send to user 
        const payload = {
            user: {
                id: user.id
            }
        }
        jwt.sign(payload, process.env.JWTSECRET, {
            expiresIn: 360000
        }, (err, token) => {
            if (err) throw err;
            // console.log(token)
            res.status(200).json({
                success: true,
                token,
                data: {
                    user: user
                } 
            })
        })

    } catch (err) {
      console.log(err)
      res.status(500).send('Server Error Logging in')
    }
};