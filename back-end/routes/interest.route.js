const router = require('express').Router();

const Interest = require('../model/interest.model')

const InterestCRUD = require('../data_access/interest.crud')
const cors = require('cors');
var bodyParser = require('body-parser')
 
router.use(bodyParser.json())
// router.use(bodyparser.json());
router.use(cors());

router.get('/',(req,res,next)=>{
    console.log("Working")
    res.send('working')
})
//e.g localhost:5000/interests/create-interest/
// body - {
//   "title":"Cooking",
//   "description":"Like Cooking Food"
// }
router.post("/create-interest",(req,res,next)=>{
        console.log("Request Received")
        var title = req.body?.title
        var description = req.body?.description
        InterestCRUD.createInterest(title,description)
        .then((obj)=>{
            console.log("User Interest Route -> Created Obj "+obj._id);
            res.send(obj)
        })
        .catch((err)=> console.log(err))
})

//localhost:5000/interests/get-all-interests
router.get("/get-all-interests",(req,res,next)=>{
    console.log("Request Received")

    InterestCRUD.readAllInterest()
    .then((obj)=>{
        console.log("Got all interest"+obj);
        res.send(obj)
    })
    .catch((err)=> console.log(err))
})


//e.g. localhost:5000/interests/get-interest-detail/63972fbb9092490761a30e3a
router.get("/get-interest-detail/:id",(req,res,next)=>{
    console.log("Request Received")
    var id = req.params.id;
    InterestCRUD.readInterestById(id)
    .then((obj)=>{
        console.log("Got interest by ID"+obj);
        res.send(obj)
    })
    .catch((err)=> console.log(err))
})
//localhost:5000/interests/update-interest-title
// {
//     "id":"63972fbb9092490761a30e3a",
//     "title":"Shooking"
// }
router.post("/update-interest-title",(req,res,next)=>{
    console.log("Request Received")
    var id = req.body.id;
    var title = req.body.title;
    InterestCRUD.updateInterestTitle(id,title)
    .then((obj)=>{
        console.log("Updated interest by ID"+obj);
        res.send(obj)
    })
    .catch((err)=> console.log(err))
})

router.get("/delete-interest/:id",(req,res,next)=>{
    console.log("Request Received")
    var id = req.params.id;
    InterestCRUD.deleteInterest(id)
    .then((obj)=>{
        console.log("Deleted interest by ID"+obj);
        res.send(obj)
    })
    .catch((err)=> console.log(err))
})






module.exports = router;
