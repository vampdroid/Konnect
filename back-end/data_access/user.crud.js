const mongoose = require('mongoose')
const User = require('../model/user.model')

//Create
const createUser = async (first_name,last_name,email,role,password) =>
{
    var status = ""
    const new_user = new User({
        fname:first_name,
        lname:last_name,
        email:email,
        role:role,
        password
    })

    return await new_user.save()
    
}

const addConnection = async (user_id) =>
{
    var user = await readUserById(user_id)
    var connection = { 
        user : mongoose.Schema.Types.ObjectId(user_id), 
        status : "connected" 
    }
    //connected, blocked
    user.connections.push(connection)
    return await user.save()
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
    // .then((obj)=> {
    //     console.log(obj+" object with"+id+" found")
    //     return obj;
    //     })
    // .catch((err)=> console.log(err));
    // return status;
}

const readUserByEmail = async (email) =>
{
    console.log("In CRUD")
   return await User.findOne({email:email})
    // .then((obj)=> {
    //     console.log(obj+" object with"+id+" found")
    //     return obj;
    //     })
    // .catch((err)=> console.log(err));
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


module.exports = {createUser,deleteUser,readUserById, readUserByEmail, readAllUsers,updateUserFname, addConnection};