const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    },
    title: {
        type: String,
        required: [true, 'title is required']
    },
    text: {
        type: String,
        required: [true, 'Text is required']
    },
    name: {
        type: String,
    },
    avatar: {
        type: String,
    },
    likes: [
        {
            user: {
                type: mongoose.Schema.ObjectId,
                ref: 'User'
            },
            post: {
                type: mongoose.Schema.ObjectId,
                ref: 'Post'
            },
            liked: false
        }
    ],
    unlikes: [
        {
            user: {
                type: mongoose.Schema.ObjectId,
                ref: 'User'
            },
            post: {
                type: mongoose.Schema.ObjectId,
                ref: 'Post'
            },
            unliked: false
        }
    ],
    comments: [
        {
            user: {
                type: mongoose.Schema.ObjectId,
                ref: 'User'
            },
            title: {
                type: String,
                required: [true, 'title is required']
            },
            description: {
                type: String,
                required: [true, 'description is Required']
            },
            name: {
                type: String
            },
            avatar: {
                type: String
            },
            date: {
                type: Date,
                default: Date.now
            }
        }
    ],
    date: {
        type: Date,
        default: Date.now
    }   

});





const Post = mongoose.model('Post', postSchema)
module.exports = Post
