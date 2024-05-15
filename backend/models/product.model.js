import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    productID:{
        type:String,
        required:true,
    },
    productName:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    quantity:{
        type:Number,
        required:true,
    },
    size:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
},)

const Product = mongoose.model('product', productSchema);

export default Product