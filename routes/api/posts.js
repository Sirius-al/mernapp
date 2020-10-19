const express = require('express');
const router = express.Router();

//? Route:    GET => api/posts
//? Desc:     Testing Route
//? access:   Public
router.get('/', (req, res) => res.status(200).send('posts Route'))



module.exports = router;