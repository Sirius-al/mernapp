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
        type: [String],
        required: [true, 'Skills are Required fields'],
    },
    bio: {
        type: String
    },
    githubusername: {
        type: String
    },
    experience: [
        {
            title: {
                type: String,
                required: [true, 'please tell us about your experience']
            },
            company: {
                type: String,
                required: [true, 'please tell us about your experience']
            },
            location: {
                type: String
            },
            from: {
                type: Date,
                required: [true, 'Please tell us when did you started working at that postion']
            },
            to: {
                type: String
            },
            current: {
                type: Boolean,
                default: false
            },
            description: {
                type: String
            },
        }
    ],
    education: [
        {
            school: {
                type: String,
                required: [true, 'which school did you studied from!']
            },
            degree: {
                type: String,
                required: [true, 'which degree did you studied for !']
            },
            fieldofstudy: {
                type: String,
                required: [true, 'which field did you studied for !']
            },
            from: {
                type: Date,
                required: [true, 'Please tell us when did got started !']
            },
            to: {
                type: String
            },
            current: {
                type: Boolean,
                default: false
            },
            description: {
                type: String
            },
        }
    ],
    social: {
        youtube: {
            type: String
        },
        twitter: {
            type: String
        },
        facebook: {
            type: String
        },
        instagram: {
            type: String
        },
        linkedIn: {
            type: String
        }
    },
    date: {
        type: Date,
        default: Date.now
    }

});


const Profile = mongoose.model('Profile', ProfileSchema)
module.exports = Profile