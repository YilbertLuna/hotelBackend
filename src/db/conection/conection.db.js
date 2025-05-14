import mongoose from "mongoose";

export const connectDb = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/juan")
        console.log('base de datos conectada')
    } catch (error) {
        console.log(error)
    }
}