const connectDB = require("../database/db")
const {ObjectId} = require("mongodb");

exports.getProfiles = async (req, res) => {
    const db = await connectDB()
    const get_profiles = await db.collection('profile').find().toArray();
    res.status(200).json(get_profiles)
}

exports.createProfile = async (req, res) => {
    const db = await connectDB()
    await db.collection('profile').insertOne(req.body)
    res.status(201).json({data: " Profile successfully added to the DB"})
}

exports.getMeAProfile = async (req, res) => {
    const db = await connectDB()
    const _id = ObjectId(req.params.id)
    const get_profile = await db.collection('profile').find({_id}).toArray()
    res.status(200).json(get_profile)
}

exports.updateProfile = async (req, res) => {
    const db = await connectDB()
    const _id = ObjectId(req.params.id)
    await db.collection('profile').updateOne({_id}, {$set: req.body})
    res.status(201).json({Message: "Profile updated successfully"})
}
