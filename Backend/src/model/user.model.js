import mongoose, { mongo } from "mongoose"
import bcrypt from "bcrypt"
// 1.email
// 	2.contact
// 	3.Password
// 	4.Full Name
// 	5.role 

const userSchema = new mongoose.Schema({
    email:{
        unique:true,
        type:String,
        required:true
    },
    password:{
        type:String,
        required:function(){
            return !this.googleId
        }
    },
    fullname:{
        type:String,
        required:true
    },
    contact:{
        unique:true,
        type:String,
        required:false
    },
    role:{
        type:String,
        required:true,
        enum:["buyer","seller"],
        default:"buyer"
    },
    googleId:{type:String,required:false}
})

userSchema.pre("save",async function () {
    if(!this.isModified("password")) return;
    
    const hash = await bcrypt.hash(this.password,10)
    this.password = hash
})

userSchema.method.comparePassword = async function (password) {
   return await bcrypt.compare(password,this.password)
}

const UserModel = mongoose.model("user",userSchema)

export default UserModel