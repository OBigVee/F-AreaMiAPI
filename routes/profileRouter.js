const express = require('express')
const profile = require('../database/profile.json')

const profileRouter = express.Router();

profileRouter.get('/profile', (req, res) => {
    res.json(profile)
})
module.exports = profileRouter;
