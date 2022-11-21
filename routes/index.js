const express = require('express');

const brandRouter = require('./brandRouter')
const profileRouter = require('./profileRouter')
const authRouter = require('./auth')

const router = express.Router()

router.route('/').get((req, res) => {
    res.json({data: "Welcome to AreaMI !!!"})
})
router.use('/auth', authRouter)
router.use(brandRouter)
router.use(profileRouter)



module.exports = router;
