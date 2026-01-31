import { Schema , model } from "mongoose";
const postSchema = new Schema({
    author: { 
        type: String, 
        required: true 
    },
    title: { 
        type: String, 
        required: true 
    },
    content: { 
        type: String, 
        required:true 
    }
}, 
{ 
    timestamps: true, 
    versionKey: false

}
);
export const PostModel = model("Post", postSchema);

