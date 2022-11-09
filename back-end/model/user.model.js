const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  profile_picture: {
    type: Buffer
  },
  dob: {
    type: Date
  },
  role:{
    type:String, //admin, user?
    required:true
  },
  bio: {
    type: String
  },
  password: {
    type: String,
    required: true,
  },
    pincode: {    
    type: String,
    // required: true,
  },

  city: {
    type: String
  },
  state:{
    type:String
  }, 
    last_accessed_on: {
    type: Date
  },
 }, {
    timestamps: true,
});

module.exports = mongoose.model("user", userSchema);
