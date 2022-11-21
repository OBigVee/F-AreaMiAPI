const express = require('express')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const connectDB = require('./database/db')
dotenv.config()

const  app = express()
const route = require('./routes/index')

const PORT = process.env.PORT || 4000
const URl =  process.env.URL || 'localhost'

app.use(bodyParser.json())
app.use(route)

connectDB().then(()=>{
    app.listen(PORT, ()=>{
        console.log(`server running on port: ${PORT} link here http://${URl}:${PORT}`);
    })
})

