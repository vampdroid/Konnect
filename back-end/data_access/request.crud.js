// const Request = require('../model/request.model')
// const RequestDetail = require('../model/request_details.model')

// //Create
// const createRequest = async (sender,receive) =>
// {
//     var status = ""
//     const new_request = new Request({
//         user_id:sender,
//         status:"sent"
//     })
//     var reqobj = await new_request.save()
//     const new_request_detail = new RequestDetail({
//         user_id:receiver,
//         request_id:reqobj._id
//     })
//     await new_request_detail.save()
//     .then((obj)=> {return true;})
//     .catch((err)=> {return false;})
// }

// //Delete
// const deleteRequest = async (id) =>
// {
//     await RequestDetail.deleteOne({request_id:id})
//     await Request.deleteOne({_id:id})
//     .then((obj)=> {return true;})
//     .catch((err)=> {return false;})
//     // return status;
// }

// //Read
// const readRequesDetailtByID = async (id) =>
// {
//    return await RequestDetail.find({request_id:id})
//     .then((obj)=> {
//         console.log(obj+" object with"+id+" found")
//         return obj;
//         })
//     .catch((err)=> console.log(err));
//     // return status;
// }

// /////////////////////////////////////////////////
// const readAllRequest = async (id) =>
// {
//    return await Request.find({})
//     .then((obj)=> {
//         console.log(obj+" object with"+id+" found")
//         return obj;
//         })
//     .catch((err)=> console.log(err));
//     // return status;
// }

// //Update 
// const updateRequestStatus = async(id, status) =>
// {
//     const u = await Request.findOne({_id:id})
//     u.Request_title = title
//     return await u.save()
// }


// module.exports = {createRequest,deleteRequest,readRequestById, readAllRequest,updateRequestTitle};