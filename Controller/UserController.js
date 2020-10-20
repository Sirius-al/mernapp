const User = require('../Models/UsersModel');

exports.userSignUp = async (req, res, next) => {
    try {
        const newUser = await User.create(req.body);

        res.status(201).json({
            success: true,
            data: {
                user: newUser
            } 
        })

    } catch (err) {
      next(err)
    }
    
};