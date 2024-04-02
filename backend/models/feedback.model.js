import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
    feedbackID:{
        type:String
    },
    userName:{
        type:String
    },
    description:{
        type:String
    },
    rating:{
        type:Number
    },
    email:{
        type:String
    },
    date:{
        type:Date
    },
    status:{
        type:String
    },
},{timestamps:true})

const Feedback = mongoose.model('Promotion', feedbackSchema);

export default Feedback