const User = require('../models/user')
const dotenv = require('dotenv')
const bcrypt = require('bcrypt')
//const {hash} = require("bcrypt");
const jwt = require('jsonwebtoken')

dotenv.config()

const saltRounds = 10;
const JWT_KEY = process.env.JWT_KEY || "FAKE_SECRET_KEY";

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
        res.status(404).json({error: "User not found"});
        return;
    }
    const match = await bcrypt.compare(assert_passwd, user.password)

    if (!match) {
        res.status(404).json({error: "User not found"});
        return;
    }

    const token = await jwt.sign({user}, JWT_KEY);
    res.json({user, access_token: token});
}
    // if (match) {
    //     res.status(201).json({message: `Welcome ${user.name.first} !!`})
    // } else {
    //     res.status(404).json({error: "user not found!1"})
    //     return
    // }
