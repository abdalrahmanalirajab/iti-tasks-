import express from "express";
import path from "path";
import { fileURLToPath } from "url";
const app = express();
app.use(express.json());

let comments = [
  {
    id: 1,
    author: "Ahmed Ali",
    body: "This article was very helpful and easy to understand."
  },
  {
    id: 2,
    author: "Sara Mohamed",
    body: "I liked the examples, they made the topic clearer."
  },
  {
    id: 3,
    author: "Omar Hassan",
    body: "Can you explain this part in more detail?"
  },
  {
    id: 4,
    author: "Mona Ibrahim",
    body: "Great work! Looking forward to more content like this."
  }
];

const filename = fileURLToPath(import.meta.url); // to get the current file path
const dirname = path.dirname(filename); // to get the current directory path

// redirect  /home to test.html
app.get("/home", (req, res) => {
  res.sendFile(path.join(dirname, "test.html"));
});

// retrieve all comments
app.get("/comments", (req, res) => {
  res.status(200).json(comments);
});

// retrieve a specific comment by ID
app.get("/comments/:id", (req, res) => {
  
  const comment = comments.find(c => c.id === Number(req.params.id));
  if (comment) {
    res.status(200).json(comment);
  } else {
    res.status(404).json({ message: "Comment not found" });
  }
});

// create a new comment 
app.post("/comments", (req, res) => {
    const newComment = {
        id:comments[comments.length - 1].id + 1 ,
        author: req.body.author,
        body: req.body.body
    };
    comments.push(newComment);
    res.status(201).json(newComment);
} 
);

// update an existing comment by ID
app.put("/comments/:id", (req, res) => {
    
    const comment = comments.find(c => c.id == Number(req.params.id));
    if (comment) {
        comment.author = req.body.author || comment.author;
        comment.body = req.body.body || comment.body;
        res.status(200).json(comment);
    } else {
        res.status(404).json({ message: "Comment not found" });
    }
} 
);

// delete a comment by ID
app.delete("/comments/:id", (req, res) => {
    const index = comments.findIndex(c => c.id == req.params.id);
    if (index != -1) {
        comments=comments.filter(c => c.id != req.params.id);
        res.status(200).json({ message: "Comment deleted" });
    } else {
        res.status(404).json({ message: "Comment not found" });
    }
} 
);


app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

