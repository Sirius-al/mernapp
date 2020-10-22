const express = require('express');
const router = express.Router();

const postController = require('../../Controller/PostController')
const appController = require('../../Controller/appController');
const tokenAuth = require('../../utils/tokenAuth');

//? Route:    POST => api/posts
//? Desc:     Post create Route
//? access:   Private
router.post('/', tokenAuth, postController.postCreate)


//? Route:    GET => api/posts
//? Desc:     Testing Route
//? access:   Public
router.get('/', postController.getPosts)



module.exports = router;