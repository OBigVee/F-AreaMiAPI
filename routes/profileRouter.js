const express = require('express')
//const profile = require('../database/profile.json')
//const connectDB = require('.././database/db')

const profileController = require('.././controllers/profileControllers')
//const auth = require('../middleware/auth')

const profileRouter = express.Router();

//profileRouter.use(auth)

profileRouter
    .route('/profile')
    .get(profileController.getProfiles)
    .post(profileController.createProfile)

profileRouter
    .route('/profile/:id')
    .get(profileController.getMeAProfile)
    .patch(profileController.updateProfile)
// routing this authentication middleware

// profileRouter
//     .use(auth)
//     .route('/profile')
//     .get(profileController.getProfiles)
//     .post(profileController.createProfile)

module.exports = profileRouter;
