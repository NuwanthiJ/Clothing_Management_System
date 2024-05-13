const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    id: Number,
    name:String,
    nic:Number,
    age:Number,
    role:String,
    contactno:Number,
    address:String,
    qualifications:String,
    department:String,
    username:String,
    password:String,
});

const Employee = mongoose.model('Employee',employeeSchema);

module.exports = Employee;