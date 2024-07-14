// const bookSchema = new mongoose.Schema({
//     title: String,
//     author: String
// })
// const Books = new mongoose.model('Book', bookSchema);

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    title: String,
    age: Number
});

const User = mongoose.model('User', userSchema);

console.log("Schema is created");
module.exports = User;