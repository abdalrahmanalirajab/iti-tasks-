import express from "express";
import { dbConnection } from "./Database/connect_db.js";
import { PostModel } from "./Database/models/post_model.js";
import router from "./modules/post.routes.js";
const server= express();

// Middleware to parse JSON bodies
server.use(express.json());

// Connect to the database
dbConnection;
PostModel ;
server.use(router);

server.listen(8000, () => {
    console.log("Server is running on port 8000");
});
