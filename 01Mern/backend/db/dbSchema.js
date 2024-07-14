const mongoose = require('mongoose');

const myDatabaseSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    }
});

const myDatabase = mongoose.model('mydata', myDatabaseSchema);

module.exports = myDatabase;