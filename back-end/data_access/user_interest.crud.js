const mongoose = require('mongoose')
const UserInterest = require('../model/user_interest.model')

//Create
const createUserInterest = async (user_id,interest_id) =>
{
    var status = ""
    const new_user_interest = new UserInterest({
        user_id,
        interest_id
    })

    return await new_user_interest.save()

    // return status;
}

//Delete
const deleteUserInterest = async (user_id,interest_id) =>
{
    console.log("in crud")
    var interest = await UserInterest.findOne({user_id:user_id,interest_id:interest_id})
    console.log(interest)
    UserInterest.deleteOne(interest._id)
    .then((obj)=> 
    console.log("object with deleted")
    )
    .catch((err)=> console.log(err));
    return true;
}

//Read
const readAllUserInterests = async (id) =>
{
   return await UserInterest.find({user_id:id})
    // .then((obj)=> {
    //     console.log(obj+" object with"+id+" found")
    //     return obj;
    //     })
    // .catch((err)=> console.log(err));
    // return status;
}


module.exports = {createUserInterest,deleteUserInterest, readAllUserInterests};