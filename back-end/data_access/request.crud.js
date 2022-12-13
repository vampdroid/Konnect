const Request = require('../model/request.model')
const UserCRUD = require('../data_access/user.crud')
//Create
const createRequest = async (sender,receiver) =>
{
    var status = ""
    const new_request = new Request({
        sender:sender,
        receiver:receiver,
        status:"requested"
    })

    return await new_request.save()
    // .then((obj)=> {return true;})
    // .catch((err)=> {return false;})
}

//Delete
const deleteRequest = async (sender,receiver) =>
{
    await Request.deleteOne({sender:sender,receiver:receiver})
    .then((obj)=> {return true;})
    .catch((err)=> {return false;})
    // return status;
}

//Read
const acceptRequest= async (sender,receiver) =>
{
    var request = await Request.findOne({sender:sender,receiver})
    var s = await UserCRUD.readUserById(sender)
    var r = await UserCRUD.readUserById(receiver)
    console.log(s)
    await UserCRUD.addConnection(sender,receiver)
    await UserCRUD.addConnection(receiver,sender)
    .then((obj)=> {
        return true
        })
    .catch((err)=> {console.log(err)
        return false;});
    // return status;
}

/////////////////////////////////////////////////
const readUserRequests = async (user_id) =>
{
   return await Request.find({receiver:user_id})
    .then((obj)=> {
        console.log(obj)
        return obj;
        })
    .catch((err)=> console.log(err));
    // return status;
}


module.exports = {createRequest,deleteRequest, acceptRequest,readUserRequests};