// const connectDB = require("../database/db")
const {ObjectId} = require("mongodb");
const Profile = require('../models/profile')

exports.getProfiles = async (req, res) => {
    const get_profiles = await Profile.find()
    // const db = await connectDB()
    // const get_profiles = await db.collection('profile').find().toArray();
    res.status(200).json(get_profiles)
}

exports.createProfile = async (req, res) => {
     await Profile.create(req.body)
    //await newProfile.save()
    // const db = await connectDB()
    // await db.collection('profile').insertOne(req.body)
    res.status(201).json({data: " Profile successfully added to the DB"})
}

exports.getMeAProfile = async (req, res) => {
    const _id = ObjectId(req.params.id)
    const get_profile = await Profile.findById({_id})

    res.status(200).json(get_profile)

    //const db = await connectDB()
    //const get_profile = await db.collection('profile').find({_id}).toArray()
}

exports.updateProfile = async (req, res) => {
    const _id = ObjectId(req.params.id)
    await Profile.updateOne({_id}, {$set: req.body})
    res.status(201).json({Message: "Profile updated successfully"})
    // await Profile.updateOne({_id}, {$set : req.body},(err, post)=>{
    //     if(!err){
    //         post.save()
    //         res.status(201).json({Message: "Profile updated successfully"})
    //     } else {
    //         res.status(400).json({Message: "Error creating a profile"})
    //     }
    // })

    //const db = await connectDB()
    //const _id = ObjectId(req.params.id)
    //await db.collection('profile').updateOne({_id}, {$set: req.body})
    // res.status(201).json({Message: "Profile updated successfully"})
}
