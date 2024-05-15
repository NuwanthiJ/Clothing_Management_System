import mongoose from "mongoose";

const adminsSchema = new mongoose.Schema({
    admin_username:{
        type:String,
        required:true,
    },
    admin_password:{
        type:String,
        required:true,
    },
    admin_type:{
        type:String,
        required:true,
    },
},)

const Admins = mongoose.model('admins', adminsSchema);

export default Admins