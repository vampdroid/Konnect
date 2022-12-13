const router = require('express').Router();

const User = require('../model/user.model')
const UserCRUD = require('../data_access/user.crud')
const cors = require('cors');
var bodyParser = require('body-parser')
 
router.use(bodyParser.json())
// router.use(bodyparser.json());
router.use(cors());

//localhost:5000/users/create-user
// {
//     "fname":"Yash",
//     "lname":"Kukreja",
//     "email":"yashskukreja@gmail.com",
//     "role":"user",
//     "password":"password"
// }

router.post("/create-user",(req,res,next)=>{
    console.log("Request Received")
    var first_name = req.body?.fname; 
    var last_name = req.body?.lname;
    var email = req.body?.email
    var role = req.body?.role
    var password = req.body?.password

    UserCRUD.createUser(first_name,last_name,email,role,password)
    .then((obj)=>{
        console.log("User Route -> Created Obj "+obj._id);
        res.send(obj)
    })
    .catch((err)=> console.log(err))
})

// localhost:5000/users/get-all-users
router.get("/get-all-users",(req,res,next)=>{
    console.log("Request Received")

    UserCRUD.readAllUsers()
    .then((obj)=>{
        console.log("Got all Users"+obj);
        res.send(obj)
    })
    .catch((err)=> console.log(err))
})

//localhost:5000/users/get-user-detail/636b94cff9e14b71a09aede3

router.get("/get-user-detail/:id",(req,res,next)=>{
    console.log("Request Received")
    var id = req.params.id;
    UserCRUD.readUserById(id)
    .then((obj)=>{
        console.log("Got User by ID"+obj);
        res.send(obj)
    })
    .catch((err)=> console.log(err))
})


router.post("/login",async (req,res,next)=>{
    console.log("Request Received")
    var email = req.body.email;
    var password = req.body.password;
    UserCRUD.readUserByEmail(email)
    .then((obj)=>{
        console.log(obj)
        if(obj.password===password)
            res.send(obj);
        else
            res.status(404).send({"err":"error"})
    })
    .catch((err)=>{

    })
})


// localhost:5000/users//update-user-fname/
// {
//     "id":"636b94cff9e14b71a09aede3",
//     "fname":"Yash S"
//   }
router.post("/update-user-fname",(req,res,next)=>{
    console.log("Request Received")
    var id = req.body.id;
    var fname = req.body.fname;
    UserCRUD.updateUserFname(id,fname)
    .then((obj)=>{
        console.log("Updated interest by ID"+obj);
        res.send(obj)
    })
    .catch((err)=> console.log(err))
})


router.get("/delete-user/:id",(req,res,next)=>{
    console.log("Request Received")
    var id = req.params.id;
    UserCRUD.deleteUser(id)
    .then((obj)=>{
        console.log("Deleted interest by ID"+obj);
        res.send(obj)
    })
    .catch((err)=> console.log(err))
})




module.exports = router;