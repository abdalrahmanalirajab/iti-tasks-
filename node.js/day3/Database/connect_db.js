import mongoose from "mongoose";

export const dbConnection = mongoose.connect("mongodb://127.0.0.1:27017/Task3") // url 
.then(() => console.log("connected to database"))
.catch((err) => console.log(err));
