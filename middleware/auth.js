const jwt = require('jsonwebtoken')
const { ObjectId } = require('mongodb')
const User = require('../models/user')
const dotenv = require('dotenv')

dotenv.config()
const JWT_KEY = process.env.JWT_KEY

const auth = async (req, res, next) =>{
    // console.log("i am here!")
    if (
        req.headers &&
        req.headers.authorization &&
        req.headers.authorization.split(" ")[1]
    ){
        const token = req.headers.authorization.split(" ")[1]
        try{
           const decode = await jwt.verify(token, JWT_KEY)
           const user = await User.findOne({_id: ObjectId(decode.user._id)})
            if(!user){
                res.status(401).json({error:"Unauthorized"})
                return
            }

            next();
        } catch (e) {
            res.status(401).json({error: "Unauthorized"})
        }
    }
}
module.exports = auth;
