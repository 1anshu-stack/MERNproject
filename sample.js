const express = require('express');
const mongoose = require('mongoose');
const app = express();

const uri = "mongodb+srv://jogi661:@N$hu-11228@cluster0.7p6vf67.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connnects = async () => {
    console.log(uri);
    await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then()
    .catch((error)=>{
        console.log('DB connection Falied');
        console.log(error);
        process.exit(1);
    })
}


app.listen(3000, ()=>{
    connnects();
    console.log('server start...');
});