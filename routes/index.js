const express = require('express');

const profile = require('../database/profile.json')
const brandRouter = require('./brandRouter')

const router = express.Router()


router.route('/').get((req, res) => {
    res.json({data: "Welcome !!!"})
})
router.use(brandRouter)






module.exports = router;
