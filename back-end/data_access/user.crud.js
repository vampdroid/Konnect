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

const addConnection = async (sender,receiver) =>
{
    var sender = await readUserById(sender)
    var connection = { 
        user : mongoose.Schema.Types.ObjectId(receiver), 
        status : "connected" 
    }
    //connected, blocked
    sender.connections.push(connection)
    return await sender.save()
}


const removeConnection = async (user_removing, user_to_remove) =>
{
    var user1 = await readUserById(user_removing)
    for(var i=0;i<user1.connections.length;i++)
    {
        if(user1.connections[i].user==user_to_remove)
            user1.connections.splice(i,1);
    }
    await user1.save()

    var user2 = await readUserById(user_to_remove)
    for(var i=0;i<user2.connections.length;i++)
    {
        if(user2.connections[i].user==user_removing)
            user2.connections.splice(i,1);
    }
    await user2.save()
    return true;
}

//Delete
const deleteUser = (id) =>
{
    User.deleteOne({_id:id})
    .then((obj)=>{ return true } )
    .catch((err)=> console.log(err));
    return true
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


module.exports = {createUser,deleteUser, removeConnection ,readUserById, readUserByEmail, readAllUsers,updateUserFname, addConnection};