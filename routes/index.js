const express = require('express');

const brandRouter = require('./brandRouter')
const profileRoute = require('./profileRouter')

const router = express.Router()

router.route('/').get((req, res) => {
    res.json({data: "Welcome !!!"})
})
router.use(brandRouter)
router.use(profileRoute)

module.exports = router;
