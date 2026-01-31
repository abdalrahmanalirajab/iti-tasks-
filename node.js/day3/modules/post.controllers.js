
import { PostModel } from "../Database/models/post_model.js";

const getAllPosts = async (req, res) => {
    let posts = await PostModel.find();
    res.status(200).json({
        message: "All posts retrieved successfully",
        data: posts
    });
};
const getPostbyId = async (req, res) => {
    let post = await PostModel.findById(req.params.id);
    res.status(200).json({
        message: "Post retrieved successfully",
        data: post
    });
};
const createPost= async (req, res) => {
    const newPost= await PostModel.insertMany(req.body);
    res.status(201).json({
        message: "Post created successfully",
        data: newPost
    });
}
const updatePost= async (req, res) => {
    const updatePost= await PostModel.findByIdAndUpdate(req.params.id , req.body, {new:true});
    res.status(200).json({
        message: "Post updated successfully",
        data: updatePost
    }); 
}
const deletePost= async (req, res) => {
    await PostModel.findByIdAndDelete(req.params.id);
    res.status(200).json({
        message: "Post deleted successfully"
    });
}
export { getAllPosts, getPostbyId ,  createPost, updatePost, deletePost };
    
