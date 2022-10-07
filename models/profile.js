const mongoose = require('mongoose')
const validator = require("validator");

const profileSchema = new mongoose.Schema({
    name: {
        first: String,
        last: String
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate: (value) =>{
            return validator.isEmail(value)
        }

    },
    brandName: {type: String},
    phone: {type: String},
    gender: {type: String},
    date: {type: Date, default: Date.now()},
})

module.exports = mongoose.model('profile', profileSchema, 'profile')
