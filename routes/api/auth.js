const express = require('express');
const router = express.Router();

//? Route:    GET => api/auth
//? Desc:     Testing Route
//? access:   Public
router.get('/', (req, res) => res.status(200).send('Auth Route'))



module.exports = router;