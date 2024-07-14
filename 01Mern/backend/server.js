const express = require('express');
const app = express();
const port = 8000;
const connectDB = require('./db/dbConnection');
const myDatabase = require('./db/dbSchema');
const cors = require('cors');

//enable cors
app.use(cors());

//middleware for parsing json
app.use(express.json());

//Registration
app.post('/register', async (req, res) => {
    try {
        const {username, password} = req.body;
        console.log(req.body);
        const myData = new myDatabase({username, password});
        await myData.save();
        res.status(201).json({message:'Registration is successfully...'})
    } catch (error) {
        res.status(500).json({message:'Registration is failed...'})
    }
})

//Login 
app.post('/login', async (req, res) => {
    try {
        const {username, password} = req.body;
        const data = await myDatabase.findOne({username});

        if(!data){
            res.status(401).json({error:'invalid username or password'});
        }

        if(data.password != password){
            res.status(401).json({error:'invalid password'});
        }

        res.status(201).json({message:'Login successful'});
    }
    catch(error){
        res.status(500).json({error:'Login failed'});
    }
})

connectDB();

app.listen(port, () => {
    console.log('server is started...');
});