const express = require('express');
const { check, validationResult }  = require('express-validator');

const UserController = require('../../Controller/UserController');


const router = express.Router();


//? Route:    GET => api/users
//? Desc:     Testing Route
//? access:   Public
// router.get('/', (req, res) => res.status(200).send('User Route'))


//? Route:    POST => api/users
//? Desc:     Testing Route
//? access:   Public
router.post('/signup', UserController.userSignUp)



module.exports = router;