// create srever --> http 

// using express --> create server 

import console from "console";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express(); // create server 
app.use(express.json()); // all app 
// res --> text, html, image, page 

let users = [
    { name: "ahmed", age: 12, id: 1 },
    { name: "mohamed", age: 14, id: 2 },
    { name: "ali", age: 16, id: 3 },
    { name: "khaled", age: 18, id: 4 },
]


app.get("/", (req,res) => {
    // res.send("hello world");
    // res.send("<h1> hello world </h1>");
    res.send("<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeYlBX9q737nzUuZSSXMppOFfuGxRzOtzfYg&s' />");
})

app.get("/users", (req,res) => {
    // res.send(users); send (text) --> if 
    res.json(users); // object
})


app.get("/home", (req,res) => {
    // dynamic
    const myFile = fileURLToPath(import.meta.url); // path for current file
    console.log(myFile)
    const dir = path.dirname(myFile) // directory 
    console.log(dir)
    // res.sendFile(dir + "/home.html")
    const myPage = path.join(dir, "home.html") 
    res.sendFile(myPage) 
})


// app.post("/users",express.json(), (req,res) => {
app.post("/users", (req,res) => {
    console.log(req.body) // undifined
    req.body.id = users.length + 1
    users.push(req.body)
    res.status(201).send("user added");
})
// id --> variable
app.put("/users/:id", (req,res) => {
    console.log(req.params.id)
    const userId =  req.params.id;
    let isFounded = users.find(user => user.id == userId )
    if(isFounded){
        isFounded.name = req.body.name
        isFounded.age = req.body.age
        res.status(200).json({message: "User updated", data: isFounded})
    }else{
        res.status(404).send("user not found")
    }
})

app.delete("/users/:id", (req,res) => {
    const id = req.params.id; // 3
    users = users.filter(user => user.id != id)
    if (users) {
        res.status(200).send("user deleted")
    }else {
        res.status(404).send("user not found")
    }
    
})


app.listen(3000, () => {
    console.log("server is running");
});