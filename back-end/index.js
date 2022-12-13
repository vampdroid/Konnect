
const mongoose = require("mongoose");
const express = require('express'); 
const bodyParser = require("body-parser");
const cors = require('cors');
const app = express();             
const dotenv = require("dotenv");
const port = 5000;          
var path = require('path');
const usercrud = require('./data_access/user.crud') 
const interestcrud = require('./data_access/interest.crud')

// app.use(cors())
// app.use(bodyParser.json());
app.use(cors());
dotenv.config()
// const mongoDB = "mongodb://127.0.0.1/my_database";
mongoose.connect('mongodb+srv://konnect:konnect123@cluster0.mibg0ql.mongodb.net/?retryWrites=true&w=majority')
// , { useNewUrlParser: true, useUnifiedTopology: true });

// Get the default connection
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});
app.get('/', async (req, res) => {   
  console.log("ok")
    //Testing DATA ACCESS files    
    // res.sendFile('index.html', {root: __dirname});   
    // usercrud.createUser("Jash","IO","jashio@gmail.com","user","pa")
    // const u = await usercrud.readUserById('636b94cff9e14b71a09aede3')
    // const u = await usercrud.readAllUsers()
    // const u = await usercrud.updateUserFname('636b94cff9e14b71a09aede3','Yashh')
    // console.log(u)
    // res.send("Hello World "+u)  
    // interestcrud.createInterest('Coding','Coding desc')
    // const u = await interestcrud.readInterestById('636b9b33414f2ec444043c9b')
    // const u = await interestcrud.readAllInterest()
    // const u = await interestcrud.updateInterestTitle('636b9b33414f2ec444043c9b','Code')
    // console.log(u)
    // res.send("Hello World "+u)  
});

const userRouter = require('./routes/user.route');
app.use('/users',userRouter);

const interestRouter = require('./routes/interest.route');
app.use('/interests',interestRouter);

const requestRouter = require('./routes/request.route');
app.use('/requests',requestRouter);

const UserInterestRouter = require('./routes/user_interest.route');
app.use('/user-interests',UserInterestRouter);

app.listen(port, () => {            //server starts listening for any attempts from a client to connect at port: {port}
    console.log(`Now listening on port ${port}`); 
});