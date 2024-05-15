import mongoose from "mongoose";

const salesSchema = new mongoose.Schema({
    salesID:{
        type:String,
        required:true,
    },
    reportType:{
        type:String,
        required:true,
    },
    Date:{
        type:String,
        required:true,
    },
    ReportDes:{
        type:String,
        required:true,
    },
  
    
},{timestamps:true})

const Sales = mongoose.model('sales', salesSchema);


export default Sales
