const User = require('../models/user')
const bcrypt = require('bcrypt')
const {hash} = require("bcrypt");
const saltRounds = 10;

exports.signup = async (req, res) => {
    const raw_passwd = req.body.password
    const password = await bcrypt.hash(raw_passwd, saltRounds)
    const data = { ...req.body, password}
    const user = await User.create(data)
    res.status(201).json({user})
    //res.json({Message: "working as expected"})
}

exports.login = async (req, res) => {
    const assert_passwd = req.body.password.toString()
    const user = await User.findOne({email: req.body.email})
    if (!user) {
        res.status(400).json({error: "user not found!"})
    }
    const match = await bcrypt.compare(assert_passwd, user.password)

    if (match) {
        res.status(201).json({message: `Welcome ${user.name.first} !!`})
    } else {
        res.status(400).json({error: "user not found!1"})
    }
}
