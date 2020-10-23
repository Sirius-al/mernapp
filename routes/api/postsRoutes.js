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


//? Route:    GET => api/posts/:id
//? Desc:     Testing Route
//? access:   Public
router.get('/:id', postController.getPost)


//? Route:    DELETE => api/posts/:id
//? Desc:     DELETE a post
//? access:   Private
router.delete('/:id', tokenAuth, postController.deletePost)


//? Route:    PATCH => api/posts/like/:id
//? Desc:     like a post
//? access:   Private
router.patch('/like/:id', tokenAuth, postController.likePost)


//? Route:    PATCH => api/posts/unlike/:id
//? Desc:     like a post
//? access:   Private
router.patch('/unlike/:id', tokenAuth, postController.unLikePost)


//? Route:    POST => api/posts/comment
//? Desc:     Post create Route
//? access:   Private
router.post('/comment', tokenAuth, postController.createComment)


module.exports = router;