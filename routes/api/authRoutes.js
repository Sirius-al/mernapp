const express = require('express');

const authController = require('../../Controller/authController');
const tokenAuth = require('../../utils/tokenAuth')

const router = express.Router();

//? Route:    GET => api/auth
//? Desc:     auth Route
//? access:   Protected
router.get('/', tokenAuth, authController.auth)



module.exports = router;