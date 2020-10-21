const express = require('express');

const profileController = require('../../Controller/ProfileController');
const tokenAuth = require('../../utils/tokenAuth');

const router = express.Router();

//? Route:    GET => api/profile
//? Desc:     Testing Route
//? access:   Public
router.get('/', (req, res) => res.status(200).send('profile Route'))


//? Route:    GET => api/profile/me
//? Desc:     Get profile of the current user based on id(inside token)
//? access:   Private
router.get('/me', tokenAuth, profileController.getMyProfile)



module.exports = router;