const validator = require('validator');

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is Required']
    },
    email: {
        type: String,
        required: [true, 'please provide Your Email Address'],
        unique: true,
        validate: [validator.isEmail, 'Please Provide a valid Email Address']
    },
    password: {
        type: String,
        required: [true, 'password is Required'],
    },
    /* confirmPassword: {
        type: String,
        required: [true, 'password confirmation is required'],
    }, */
    avatar: {
        type: String,

    },
    date: {
        type: Date,
        default: Date.now
    }
})

const User = mongoose.model('User', UserSchema);

module.exports = User;
