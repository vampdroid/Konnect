const mongoose = require('mongoose')
const Interest = require('../model/interest.model')

//Create
const createInterest = (title,description) =>
{
    var status = ""
    const new_interest = new Interest({
        interest_title:title,
        interest_description:description
    })

    new_interest.save()
    .then((obj)=> console.log(obj+" object created"))
    .catch((err)=> console.log(err));
    // return status;
}

//Delete
const deleteInterest = (id) =>
{
    User.deleteOne({_id:id})
    .then((obj)=> console.log(obj+" object with"+id+" deleted"))
    .catch((err)=> console.log(err));
    // return status;
}

//Read
const readInterestById = async (id) =>
{
   return await Interest.findOne({_id:id})
    .then((obj)=> {
        console.log(obj+" object with"+id+" found")
        return obj;
        })
    .catch((err)=> console.log(err));
    // return status;
}
const readAllInterest = async (id) =>
{
   return await Interest.find({})
    .then((obj)=> {
        console.log(obj+" object with"+id+" found")
        return obj;
        })
    .catch((err)=> console.log(err));
    // return status;
}

//Update 
const updateInterestTitle = async(id, title) =>
{
    const u = await Interest.findOne({_id:id})
    u.interest_title = title
    return await u.save()
}


module.exports = {createInterest,deleteInterest,readInterestById, readAllInterest,updateInterestTitle};