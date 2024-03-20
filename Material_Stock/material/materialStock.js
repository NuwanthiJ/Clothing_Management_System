const mongoose = require('mongoose')

const material = mongoose.Schema(
    {
        name:{
            type: String,
            required:[true]
        },
        type:{
            type: String,
            required:[true]
        },
        unit:{
            type: Number,
            required:[true]
        },
        weight:{
            type: Number,
            required:[true]
        }
    },
    {
        timestamps: true
    }
)

const stock = mongoose.model('material',material);
module.exports = stock;