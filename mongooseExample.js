const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    age: Number,
});

const UserModel = new mongoose.model('users', UserSchema);

const main = async () => {
    await mongoose.connect('mongodb://127.0.0.1:27017/myDatabase');
    console.log('connect to mongodb...');

    const newData = new UserModel({
        name: 'Anshu',
        age: 23
    });
    await newData.save();
    console.log('new data is saved...')
}

main();