const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  id: String,
  material: String,
  quantity: String,
  price: String,
  date: Date,
});

const User = mongoose.model("User", userSchema);

module.exports = User;


