//import mongoose from "mongoose";

const mongoose = require('mongoose')
let validator = require('validator')

const brandSchema = new mongoose.Schema({
    name: {type: String},
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate: (value) =>{
            return validator.isEmail(value)
        }
    },
    Desc: {type: String},
    location: [
        {
            latitude: Number,
            longitude: Number
        }
    ],
    logo:{type: String},
    date: {type: Date, default: Date.now()},
    category: {type: String}
})
module.exports = mongoose.model('brands', brandSchema, "brands")
