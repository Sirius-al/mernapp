const Profile = require('../Models/ProfileModel');
const User = require('../Models/UsersModel');



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