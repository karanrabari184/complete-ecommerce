// 1.email
// 	2.contact
// 	3.Password
// 	4.Full Name
// 	5.role 

import { config } from "../config/config.js"
import UserModel from "../model/user.model.js"
import jwt from "jsonwebtoken"

async function sendToken(user, res) {
    const token = jwt.sign({
        id: user._id
    }, config.JWT_Secrets)
}

async function RegisterController(req, res) {
    const { email, password, fullname, contact, role } = req.body
    try {
        const UserExist = await UserModel.findOne({
            $or: [{ email }, { fullname }]
        })

        if (UserExist) {
            return res.status(409).json({
                message: "User is Already Exist with this Credentials"
            })
        }

        const user = await UserModel.create({
            email, password, fullname, contact, role
        })

        sendToken(user)

        res.status(201).json({
            message: "User Created SucessFully",
            fullname: user.fullname,
            email: user.email,
            contact: user.contact
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "server Error" })

    }

}

export const GoogleCallback = async(req,res)=>{
    const {id,displayName,emails}=req.user
    const email = emails[0].value
  let user = await UserModel.findOne({email})

    if(!user){
       user= await UserModel.create({
            email,
            googleId:id,
            fullname : displayName,

        })
    }

    const token = jwt.sign(
       { id: user._id },
      config.JWT_Secrets,
      { expiresIn: "7d" })
      
    res.cookie("token",token)
    res.redirect("http://localhost:5173/")
}

export default RegisterController