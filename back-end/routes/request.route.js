const router = require('express').Router();

const RequestCRUD = require('../data_access/request.crud')
const cors = require('cors');
var bodyParser = require('body-parser')
 
router.use(bodyParser.json())
// router.use(bodyparser.json());
router.use(cors());


router.post("/create-request", async (req,res,next)=>{
    console.log("Request Received")
    var sender = req.body?.sender; 
    var receiver = req.body?.receiver;

    RequestCRUD.createRequest(sender,receiver)
    .then((obj)=>{
        console.log("Request Route -> Created Obj "+obj);
        res.send(obj)
    })
    .catch((err)=> console.log(err))
})

// localhost:5000/users/get-all-users
router.get("/get-user-request/:receiver_id",(req,res,next)=>{
    console.log("Request Received")
    var receiver_id = req.params.receiver_id

    RequestCRUD.readUserRequests(receiver_id)
    .then((obj)=>{
        console.log("Got all User Requests"+obj);
        res.send(obj)
    })
    .catch((err)=> console.log(err))
})

//localhost:5000/users/get-user-detail/636b94cff9e14b71a09aede3

router.post("/accept-user-request/",(req,res,next)=>{
    console.log("Request Received")
    var sender = req.body.sender;
    var receiver = req.body.receiver;

    RequestCRUD.acceptRequest(sender,receiver)
    .then((obj)=>{
        console.log("accepted "+obj);
        res.send(obj)
    })
    .catch((err)=> console.log(err))
})

router.post("/deny-user-request/",(req,res,next)=>{
    console.log("Request Received")
    var sender = req.body.sender;
    var receiver = req.body.receiver;

    RequestCRUD.deleteRequest(sender,receiver)
    .then((obj)=>{
        console.log("denied "+obj);
        res.send(obj)
    })
    .catch((err)=> console.log(err))
})

module.exports = router;