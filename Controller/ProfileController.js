const Profile = require('../Models/ProfileModel');
const User = require('../Models/UsersModel');
const validator = require('validator');



exports.getMyProfile = async (req, res, next) => {
    
    try {
        const profile = await Profile.findOne({ user: req.user.id }).populate('User', ['name', 'avatar']);

        if (!profile) {
            return res.status(400).json({
                message: 'there is no profile for this user'
            })          
        }
         res.status(200).json({
            success: true,
            data: {
                profile
            }
         })


    } catch (err) {
      console.log(err)
      res.status(500).send('Server error getting your profile!!')
    }
}



exports.createProfile = async (req, res, next) => {
    
    if (!req.body.status || validator.isEmpty(req.body.status)) {
        return res.status(400).json({
            msg: 'status is Required'
        })
    } else if (!req.body.skills || validator.isEmpty(req.body.skills)) {
            return res.status(400).json({
                msg: 'skills is Required'
            })
    }

    const { company, website, location, status, skills, bio, githubusername, youtube, twitter, facebook, instagram, linkedIn } = req.body;

    let profileFields = {};
    profileFields.socials = {};

    profileFields.user = req.user.id;
    if (company) profileFields.company = company; 
    if (website) profileFields.website = website; 
    if (location) profileFields.location = location; 
    if (bio) profileFields.bio = bio; 
    if (status) profileFields.status = status; 
    if (githubusername) profileFields.githubusername = githubusername; 
    
    if (skills) {
        profileFields.skills = skills.split(',')
    }
    if (facebook) profileFields.socials.facebook = facebook; 
    if (youtube) profileFields.socials.youtube = youtube; 
    if (twitter) profileFields.socials.twitter = twitter; 
    if (instagram) profileFields.socials.instagram = instagram; 
    if (linkedIn) profileFields.socials.linkedIn = linkedIn; 
    

    try {
      let profile = await Profile.findOne({ user: req.user.id })

      if (profile) {
        profile = await Profile.findOneAndUpdate(
            { user: req.user.id },
            { $set: profileFields },
            { new: true })

            return res.status(201).json({
                success: true,
                profile
            })
        }
        
        profile = await Profile.create(profileFields)
        
        res.status(200).json({
            success: true,
            profile
        })


    } catch (err) {
      console.log(err);
      res.status(500).send('Server error creating Profile')
    }
}