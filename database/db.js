const MongoClient  = require('mongodb').MongoClient
const dotenv = require('dotenv').config()

const db_url  = process.env.DB_URL
//const client = new MongoClient()

//     ,  (error, database)=>{
//     if (error){
//         return console.log("Not connected for some reasons")
//     }
// })

const dbName = 'test_AreaMi_DB'

async function connectDB(){
    const client = await MongoClient.connect(db_url)
    console.log("MongoDB  successfully connected to server");
    const db = client.db(dbName);
    const collectionBrand = db.collection('brands');
    const collectionProfile = db.collection('profile');
    return db;

}
module.exports = connectDB;
