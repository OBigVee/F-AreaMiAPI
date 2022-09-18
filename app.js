const express = require('express')
const  app = express()
const route = require('./routes/index')

const port = 4000
const url = 'localhost'

app.use(route)
app.listen(port, ()=>{
    console.log(`server running on port: ${port} http://${url}:${port}`);
})
