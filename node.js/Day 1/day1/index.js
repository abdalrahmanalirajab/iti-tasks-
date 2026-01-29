// es5 
// const os = module.require("node:os");
// const os = require("os")
// console.log(os.hostname());
// console.log(os.freemem());
// console.log(os.machine());
const fs = require("fs"); // file system 
// // fs.writeFileSync("file.txt", "hello world from nodejs");
// const data = fs.readFileSync("file.txt", "utf-8");
// console.log(data);

// cearte server  -->  http

const http = require("http");

let users = [
    {name: "ali", age: 22, id: 1},
    {name: "ahmed", age: 22, id: 2},
    {name: "rabee3", age: 22, id: 3},
    {name: "Sameer", age: 22, id: 4},
]



const server = http.createServer((req, res) => {
    console.log(req.url);
    console.log(req.method);

    if(req.url == "/home"){
        const mypage = fs.readFileSync("home.html", "utf-8");
        res.setHeader("Content-Type", "text/html")
        res.end(mypage)
    }else if(req.url == "/users" && req.method == "GET"){
        res.setHeader("Content-Type", "application/json")
        res.end(JSON.stringify(users))
    }else if (req.url == "/users" && req.method == "POST"){
        req.on("data", (chunck) => {
            console.log(JSON.parse(chunck));
            // users.push(JSON.parse(chunck))
            const newUser = JSON.parse(chunck)
            const isFounded = users.find(user => user.id == newUser.id) 
            if(isFounded){
                res.statusCode = 409
                res.end("user already exist")
            }else{
                res.statusCode = 201
                users.push(newUser)
                res.end("user created")
            }
        })
    }else if(req.url == "/users" && req.method == "PUT"){
            // res.end("user updated")
            req.on("data", (chunck) => {
                // console.log(JSON.parse(chunck));
                const updatedUser = JSON.parse(chunck)
                const isFounded = users.find(user => user.id == updatedUser.id)
                if(isFounded){
                        isFounded.name = updatedUser.name
                        isFounded.age = updatedUser.age
                        res.statusCode = 200
                        res.end("user updated")
                }else{
                    res.statusCode = 404
                    res.end("user not found")
                }
            })
        }else if (req.url == "/users" && req.method == "DELETE"){
            req.on("data", (chunck) => {
                const deletedUser = JSON.parse(chunck)
                users = users.filter(users => users.id != deletedUser.id)
                res.end("user deleted")
                res.statusCode = 200
            })
            // res.end("user deleted")
        }

    // res.end("hello world from nodejs")
    // res.end("<h1>hello world from nodejs</h1>")

    // res.setHeader("Content-Type", "text/html") // format 
    // res.end("<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeYlBX9q737nzUuZSSXMppOFfuGxRzOtzfYg&s' /> ")


}) // create server

server.listen(3000, function(error){
    if(error){
        console.log(error);
    }else{
        console.log("server is running on port 3000");
    }
})




// CRUD 

// create  --> post --> /users
// read  --> get --> /users
// update --> put/patch --> /users
// delete --> delete --> /users