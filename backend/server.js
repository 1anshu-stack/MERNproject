import express from "express"
import connectionDB from "./src/db/index.js"
import dotenv from "dotenv"
import {User} from "./src/model/user.model.js"
import cors from "cors"

dotenv.config({
    path: './env'
})
const app = express();

//middleware
app.use(express.json())
app.use(cors())

//Registration
app.post("/registration", async (req, res) => {
    try {
        const {username, password} = req.body;
        console.log(req.body);
        // console.log(username, password);
        const user = await User.create({
            username,
            password
        })
        // const user = new User({username, password});
        // await user.save();
        return res.status(201).json({message: 'Registration complete'})
    } catch (error) {
        return res.status(401).json({error:'Registration failed'});
    }
})


//login
app.post("/login", async (req, res) => {
    try {
        const {username, password} = req.body;
        const user = await User.findOne({username})
        if(!user){
            return res.status(401).json({error: "invalid username or password"})
        }
        // console.log(user);

        if(user.password !== password){
            return res.status(402).json({error: "invalid password"})
        }

        return res.status(200).json({message: "you are login"})
    } catch (error) {
        return res.status(500).json({error: "invalid"})
    }
})

connectionDB()
.then(() => {
    app.listen(8000, ()=>{
        console.log(`server start at port ${process.env.PORT} `);
    })
})
.catch((error) => {
    console.log('an able to connect with database:', error)
})