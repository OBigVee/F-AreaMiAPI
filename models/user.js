const mongoose = require('mongoose')
const validator = require("validator");

const userSchema = new mongoose.Schema({
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
  password:{
        type: String,
      required: true
  }
})

module.exports = mongoose.model('user', userSchema, 'user')
