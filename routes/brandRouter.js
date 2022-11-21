const express = require('express')
//const brands = require('../database/brands.json');
//const connectDB = require('.././database/db')
//const {ObjectId} = require("mongodb");

const brandControllers = require('../controllers/brandControllers')
//const auth = require('../middleware/auth')

const brandRouter = express.Router()

//brandRouter.use(auth())
brandRouter
    .route('/brands')
    .get(brandControllers.index)
    .post(brandControllers.createNewBrand)

brandRouter
    .route('/brands/:id')
    .get(brandControllers.getMeABrand)
    .patch(brandControllers.updateBrandInfo)

module.exports = brandRouter;
