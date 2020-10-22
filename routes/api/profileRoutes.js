const express = require('express');

const profileController = require('../../Controller/ProfileController');
const appController = require('../../Controller/appController');
const tokenAuth = require('../../utils/tokenAuth');

const router = express.Router();

//? Route:    POST => api/profile
//? Desc:     Create profile
//? access:   Private
router.post('/', tokenAuth, profileController.createProfile)


//? Route:    PATCH => api/profile/experience
//? Desc:     Create Experience
//? access:   Private
router.patch('/experience', tokenAuth, profileController.createExperience)


//! Route:    DELETE => api/profile/experience/:exp_id
//? Desc:     Create Experience
//? access:   Private
router.delete('/experience/:id', tokenAuth, profileController.deleteExperienceById)


//? Route:    PATCH => api/profile/experience
//? Desc:     Create Experience
//? access:   Private
router.patch('/education', tokenAuth, profileController.createEducation)


//! Route:    DELETE => api/profile/experience/:exp_id
//? Desc:     Create Experience
//? access:   Private
router.delete('/education/:id', tokenAuth, profileController.deleteEducationById)


//? Route:    GET => api/profile
//? Desc:     Get all profiles
//? access:   Public
router.get('/', profileController.getAllProfiles)


//! Route:    Delete => api/profile
//? Desc:     Get all profiles
//? access:   Private
router.delete('/', tokenAuth, profileController.deleteProfileUserPosts)


//? Route:    GET => api/profile/:User_id
//? Desc:     Get all profiles
//? access:   Public
router.get('/:user_id', profileController.getProfileByUserId)


//? Route:    GET => api/profile/me
//? Desc:     Get profile of the current user based on id(inside token)
//? access:   Private
router.get('/me', tokenAuth, profileController.getMyProfile)


//? Route:    GET => api/profile/github/:username
//? Desc:     Get profile of the current user based on id(inside token)
//? access:   Private
router.get('/github/:username', appController.getGithubRepos)



module.exports = router;