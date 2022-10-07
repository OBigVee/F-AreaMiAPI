const {default: mongoose} = require('mongoose');
const path = require('path')
//await mongoose.connect('mongodb://localhost/my_database');

// const MongoClient  = require('mongodb').MongoClient
const dotenv = require('dotenv').config()

const db_url  = process.env.DB_URL

const dbName = 'test_AreaMi_DB'

const db_url_DbNamePath = path.join(db_url,dbName).toString()

async function connectDB(){
    const client = await mongoose.connect("mongodb://localhost:27017/test_AreaMi_DB").then((connect,error)=>{
        if(!connect){
            console.log("Mongo is not connected to the server")
        } else {
            console.log("Mongo is connected to server")
        }
    })

}
// async function connectDB(){
//     const client = await MongoClient.connect(db_url)
//     console.log("MongoDB  successfully connected to server");
//     const db = client.db(dbName);
//     const collectionBrand = db.collection('brands');
//     const collectionProfile = db.collection('profile');
//     return db;
//
// }
module.exports = connectDB;
