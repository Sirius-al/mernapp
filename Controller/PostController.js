const User = require('../Models/UsersModel');
const Post = require('../Models/PostModel');

const validator = require('validator');

const { Res, errRes } = require('../utils/Res&errRes')



exports.postCreate = async (req, res, next) => {

    if (!req.body.title || validator.isEmpty(req.body.title)) return errRes(res, 400, 'title is Required')
    if (!req.body.text || validator.isEmpty(req.body.text)) return errRes(res, 400, 'text is Required')
    
    
    try {
        const user = await User.findById(req.user.id).select('-password')
        
        let newPost = {
            title: req.body.title,
            text: req.body.text,
            user: req.user.id,
            name: user.name,
            avatar: user.avatar,
        }
        const post = await Post.create(newPost)
        Res(res, 201, post)
        
    } catch (err) {
      console.log(err)
      res.status(500).send('Server error creating post')
    }
}


exports.getPosts = async (req, res, next) => {
    
    try {
        const posts = await Post.find().sort({ date: -1 })
        Res(res, 200, posts)

    } catch (err) {
        console.log(err)
        errRes(res, 500, 'Server error creating post')
    }

}


exports.getPost = async (req, res, next) => {
    
    try {
        const post = await Post.findById(req.params.id)

        if (!post) {
            errRes(res, 404, 'The post You are looking is not available anymore! 😔')
        }

        Res(res, 200, post)

    } catch (err) {
        console.log(err)
        errRes(res, 500, 'Server error creating post')
    }

}