const mongoose = require("mongoose");
const express = require('express'); 
const bodyParser = require("body-parser");
const cors = require('cors');
const app = express();             
const dotenv = require("dotenv");
const port = 5000;          
var path = require('path');
app.use(cors())

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
// app.get('/', (req, res) => {       
//     // res.sendFile('index.html', {root: __dirname});     
//     res.send("Hello World")                                                  
// });

app.listen(port, () => {            //server starts listening for any attempts from a client to connect at port: {port}
    console.log(`Now listening on port ${port}`); 
});