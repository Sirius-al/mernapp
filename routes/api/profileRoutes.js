const express = require('express');
const router = express.Router();

//? Route:    GET => api/profile
//? Desc:     Testing Route
//? access:   Public
router.get('/', (req, res) => res.status(200).send('profile Route'))



module.exports = router;