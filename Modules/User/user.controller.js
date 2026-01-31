
import {userModel} from "../../Database/Models/user.model.js";
import bcrypt from "bcrypt"
const getUsers = async (req,res) => {
    // get data from table --> users 
    const users  = await userModel.find();
    res.json({
        message: "List of Users: ", 
        data: users
    })
}

const addUser = async (req,res) => {
    let newUser = await userModel.insertMany(req.body)
    res.status(201).json({
        message: "User added successfully",
        data: newUser
    })
}


const updateUser = async (req,res) => {
    const id = req.params.id
    const updatesUser = await userModel.findByIdAndUpdate(id, req.body, {new: true})
    res.status(200).json({
        message: "User updated successfully",
        data: updatesUser
    })
}

const deleteUser =  async( req,res) => {
    const id = req.params.id
    const deletedUser = await userModel.findByIdAndDelete(id)
    // console.log(deletedUser)
    res.status(200).json({
        message: "User deleted successfully"
    })
}

const signup = async (req,res) => {
    // const foundedUser = await userModel.findOne({email: req.body.email})
    // if(foundedUser){
    //     res.json({
    //         message: "email already exist"
    //     })
    // }else{
    //     // hash password 
        // req.body.password = bcrypt.hashSync(req.body.password,8 )
        let addedUser = await userModel.insertMany(req.body)
        res.status(201).json({
        message: "signup successfully",
        data: addedUser
    })
    // }
}

const signin  = async(req,res) => {
    // res.json("signin")
    // check email 
    // const findUser = await userModel.findOne({email: req.body.email})
    // if(findUser){
        // res.json("email exist")
        // check password 
        const checkPass = bcrypt.compareSync(req.body.password, req.foundedUser.password)
        if(checkPass){
            res.json({
                message: "welcome",
                // data: findUser
                data: req.foundedUser
            })
        }else{
            res.status(422).json("Email or Password is invalid")
        }

    // }
    // else{
    //     res.json("please sign up")
    // }


}



export {
    getUsers,
    addUser,
    updateUser,
    deleteUser,
    signup,
    signin
}

