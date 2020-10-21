const mongoose = require('mongoose');


const ProfileSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    },
    company: {
        type: String
    },
    website: {
        type: String
    },
    location: {
        type: String
    },
    status: {
        type: String,
        required: [true, 'Profile Status is Required'],
    },
    skills: {
        type: String
    },
    company: {
        type: String
    },

});


const Profile = mongoose.model('Profile', ProfileSchema)
module.exports = Profile