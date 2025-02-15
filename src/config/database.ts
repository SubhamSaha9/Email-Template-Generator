import mongoose from 'mongoose'

export const connect = () => {
    mongoose.connect(process.env.MONGO_URI!).then(() => {
        console.log("DB connected successfully!");
    }).catch((error:any) => {
        console.log("DB connection failed.");
        console.error(error);
        process.exit(1);
    })
}