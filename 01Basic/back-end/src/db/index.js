import mongoose from "mongoose";

const connectionDB = async () => {
    try {
        const connectD = await mongoose.connect(`${process.env.MONGODB_URI}/my_database`)
        console.log(connectD.connection.host)
    } catch (error) {
        console.log('Can not access db services:', error)
        process.exit(1)
    }
}

export default connectionDB;