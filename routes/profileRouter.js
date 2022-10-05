const express = require('express')
const profile = require('../database/profile.json')
const connectDB = require('.././database/db')

const profileController = require('.././controllers/profileControllers')

const profileRouter = express.Router();

profileRouter.route('/profile')
    .get(profileController.getProfiles)
    .post(profileController.createProfile)

profileRouter.route('/profile/:id')
    .get(profileController.getMeAProfile)
    .patch(profileController.updateProfile)
module.exports = profileRouter;
