
import { userModel } from "../Database/Models/user.model.js";

const checkEmail = async(req, res,next) => {
    console.log(req.url)

     const foundedUser = await userModel.findOne({email: req.body.email})

     if(req.url == "/signup"){
         if(foundedUser){
            res.json({
                message: "email already exist"
            })
        }else{
            next() // hash, inser
        }
     }else{
        if(foundedUser){
            req.foundedUser = foundedUser
            next()
        }else{
            res.status(404).json("please sign up")
        }
     }
    
}

export default checkEmail


// signup --> email already exist --> 
// sign in --> email --> db --> welcome, not in db --> sign up 