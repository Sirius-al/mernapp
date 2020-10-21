const express = require('express');
const User = require('./../../Models/UsersModel');
const AppError = require('../../utils/AppError');
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');

const UserController = require('./../../Controller/UserController');


const router = express.Router();


//? Route:    GET => api/users
//? Desc:     Testing Route
//? access:   Public
// router.get('/', (req, res) => res.status(200).send('User Route'))


//? Route:    POST => api/users
//? Desc:     Testing Route
//? access:   Public
router.post('/', UserController.userSignUp);

//? Route:    POST => api/users/login
//? Desc:     Testing Route
//? access:   Public
router.get('/', UserController.userLogin);




module.exports = router;