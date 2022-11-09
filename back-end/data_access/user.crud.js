const mongoose = require('mongoose')
const User = require('../model/user.model')

//Create
const createUser = (first_name,last_name,email,role,password) =>
{
    var status = ""
    const new_user = new User({
        fname:first_name,
        lname:last_name,
        email:email,
        role:role,
        password
    })

    new_user.save()
    .then((obj)=> console.log(obj+" object created"))
    .catch((err)=> console.log(err));
    // return status;
}

//Delete
const deleteUser = (id) =>
{
    User.deleteOne({_id:id})
    .then((obj)=> console.log(obj+" object with"+id+" deleted"))
    .catch((err)=> console.log(err));
    // return status;
}

//Read
const readUserById = async (id) =>
{
   return await User.findOne({_id:id})
    .then((obj)=> {
        console.log(obj+" object with"+id+" found")
        return obj;
        })
    .catch((err)=> console.log(err));
    // return status;
}
const readAllUsers = async (id) =>
{
   return await User.find({})
    .then((obj)=> {
        console.log(obj+" object with"+id+" found")
        return obj;
        })
    .catch((err)=> console.log(err));
    // return status;
}

//Update 
const updateUserFname = async(id, fname) =>
{
    const u = await User.findOne({_id:id})
    u.fname = fname
    return await u.save()
}


module.exports = {createUser,deleteUser,readUserById, readAllUsers,updateUserFname};