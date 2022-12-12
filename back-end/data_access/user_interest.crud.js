const mongoose = require('mongoose')
const UserInterest = require('../model/user_interest.model')

//Create
const createUserInterest = (user_id,interest_id) =>
{
    var status = ""
    const new_user_interest = new UserInterest({
        user_id,
        interest_id
    })

    new_user_interest.save()
    .then((obj)=> {
        console.log(obj+" object created")
        return obj;
        })
    .catch((err)=> console.log(err));
    // return status;
}

//Delete
const deleteUserInterest = (id) =>
{
    User.deleteOne({_id:id})
    .then((obj)=> console.log(obj+" object with"+id+" deleted"))
    .catch((err)=> console.log(err));
    return true;
}

//Read
const readAllUserInterests = async (id) =>
{
   return await User.find({})
    .then((obj)=> {
        console.log(obj+" object with"+id+" found")
        return obj;
        })
    .catch((err)=> console.log(err));
    // return status;
}


module.exports = {createUserInterest,deleteUserInterest, readAllUserInterests};