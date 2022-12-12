const mongoose = require('mongoose')
const Interest = require('../model/interest.model')

//Create
const createInterest = async (title,description) =>
{
    var status = ""
    const new_interest = new Interest({
        interest_title:title,
        interest_description:description
    })

    var obj = await new_interest.save()
    return obj
    // .then((obj)=> { 
    //     console.log("objectttt"+obj)
    //     return obj;
    // })
    // .catch((err)=> console.log(err));
    // return status;
}

//Delete
const deleteInterest = async (id) =>
{
    return await Interest.deleteOne({_id:id})
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