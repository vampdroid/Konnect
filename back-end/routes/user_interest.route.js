const router = require('express').Router();

const UserInterest = require('../model/user_interest.model')
const UserInterestCRUD = require('../data_access/user_interest.crud')
const cors = require('cors');
var bodyParser = require('body-parser')
 
router.use(bodyParser.json())
// router.use(bodyparser.json());
router.use(cors());


router.post('/add-user-interest',(req,res,next)=>{
    console.log("Request Received")
    var user_id = req.body.user_id
    var interest_id = req.body.interest_id

    UserInterestCRUD.createUserInterest(user_id,interest_id)
    .then((obj)=>{
        console.log(obj)
        res.send(obj)
    })
    .catch((obj)=>{

    })
})


router.get('/get-user-interest/:id',(req,res,next)=>{
    console.log("Request Received")
    var id = req.params.id

    UserInterestCRUD.readAllUserInterests(id)
    .then((obj)=>{
        console.log(obj);
        res.send(obj)
    })
    .catch((err)=>{

    })
})

router.get('/delete-user-interest/:user_id/:interest_id',(req,res,next)=>{
    console.log("Request Received")
    var user_id = req.params.user_id
    var interest_id = req.params.interest_id

    UserInterestCRUD.deleteUserInterest(user_id,interest_id)
    .then((obj)=>{
        console.log(obj);
        res.status(200).send(obj)
    })
    .catch((err)=>{

    })
})




module.exports = router;