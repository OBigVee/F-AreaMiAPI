const express = require('express')
const brands = require("../database/brands.json");
const brandRouter = express.Router()

brandRouter.route('/brands')
    .get((req, res) => {
        res.json({brands})
    })

    .post((req, res) => {
        res.send("brand added successfully")
    })

brandRouter.get('/brands/:id', (req, res) => {
    res.json(brands[req.params.id])
})
module.exports = brandRouter;
