const express = require('express');
const mongoose = require('mongoose');
const app = express();

const uri = "mongodb+srv://anshu424:@N$hu-11228@cluster0.vlfqm7k.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

exports.connnect = () => {
    mongoose.connect(uri, {
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
    console.log('server start...');
});