// create server 
import express from "express";
// import mongoose from "mongoose";
import { dbConnection } from "./Database/db_connect.js";
import { userModel } from "./Database/Models/user.model.js";
import userRoutes from "./Modules/User/user.routes.js";
const app = express(); 
app.use(express.json()); // middleware
dbConnection;
userModel;
app.use(userRoutes)

// custom middleware 

app.listen(3000, () => {
    console.log("server is running on port 3000");
});