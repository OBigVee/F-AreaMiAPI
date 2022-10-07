//const connectDB = require("../database/db")

const {ObjectId} = require("mongodb");
const Brand = require(".././models/brand")

exports.index = async (req, res) => {
    // list all brands
    // const db = await connectDB()
    // const brands = await db.collection('brands').find().toArray();
    const brands = await Brand.find()
    res.status(200).json(brands)
}

exports.createNewBrand = async (req, res) => {
    // post a new brand
    const newBrand = Brand.create(req.body)
    res.status(201).json({data: "brand added to DB successfully"})

    // const db = await connectDB()
    // const newBrand = db.collection('brands').insertOne(req.body)
    //res.status(201).json({data: "brand added to DB successfully"})
}

exports.getMeABrand = async (req, res) => {
    // find a particular brand
    const _id = ObjectId(req.params.id)
    const brands = await Brand.findById({_id})
    res.status(200).json(brands)


    //const db = await connectDB()
    // const brands = await db.collection('brands').find({_id}).toArray();
    //res.status(200).json(brands[req.params.id])
}
exports.updateBrandInfo = async (req, res) => {
    const _id = ObjectId(req.params.id);
    await Brand.updateOne({_id}, {$set: req.body})
    res.status(201).json({message: "brand information updated"})
}
