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


//! Route:    DELETE => api/posts/del/:id
//? Desc:     DELETE a post
//? access:   Private
router.delete('/del/:id', tokenAuth, postController.deletePost)


//? Route:    PATCH => api/posts/like/:id
//? Desc:     like a post
//? access:   Private
router.patch('/like/:id', tokenAuth, postController.likePost)


//? Route:    PATCH => api/posts/unlike/:id
//? Desc:     like a post
//? access:   Private
router.patch('/unlike/:id', tokenAuth, postController.unLikePost)


//? Route:    PATCH => api/posts/comment/:id
//? Desc:     comment create Route
//? access:   Private
router.patch('/comment/:id', tokenAuth, postController.createComment)


//? Route:    PATCH => api/posts/comment/:id/:comment_id
//? Desc:     Delete comment Route
//? access:   Private
router.delete('/comment/:id/:comment_id', tokenAuth, postController.deleteComment)


module.exports = router;