import express from "express";
import { getAllPosts , createPost , updatePost , deletePost  , getPostbyId} from "../modules/post.controllers.js";

const router = express.Router();

router.get("/posts" , getAllPosts);
router.get("/posts/:id" , getPostbyId);
router.post("/posts" , createPost);
router.put("/posts/:id" , updatePost);
router.delete("/posts/:id" , deletePost);

export default router;