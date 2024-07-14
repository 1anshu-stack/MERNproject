const mongoose = require('mongoose')

const uri = 'mongodb+srv://cluster0.7p6vf67.mongodb.net/?retryWrites=true&w=majority'
const connectDB = async () => {
    try{
        await mongoose.connect(uri, {
            dbName: "cluster0",
            user: "jogi661",
            pass: "@N$hu-11228",
            autoIndex: true,
            connectTimeoutMS: 300000,
            maxPoolSize: 5,
            minPoolSize: 1,
        });
        console.log('db is connected...');
    }
    catch(err){
        console.log(err);
    }
} 

module.exports = connectDB;