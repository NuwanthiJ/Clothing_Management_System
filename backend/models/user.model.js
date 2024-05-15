import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userID:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String         
    },
   
    
},{timestamps:true})


//db name
const User = mongoose.model('User', userSchema);

export default User