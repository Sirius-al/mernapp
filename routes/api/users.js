const express = require('express');

const UserController = require('../../Controller/UserController');


const router = express.Router();


//? Route:    GET => api.users
//? Desc:     Testing Route
//? access:   Public
// router.get('/', (req, res) => res.status(200).send('User Route'))


//? Route:    POST => api.users
//? Desc:     Testing Route
//? access:   Public
router.post('/', UserController.user)



module.exports = router;