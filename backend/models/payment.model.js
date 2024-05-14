import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
    paymentID:{
        type:String
    },
    name:{
        type:String
    },
    PhoneNo:{
        type:Number
    },
    postalCode:{
        type:String
    },
    address:{
        type:String
    },
    email:{
        type:String
    },
   
    
},{timestamps:true})

const Payement = mongoose.model('payment', paymentSchema);

export default Payement 