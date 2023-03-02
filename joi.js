// //Express joi validator
// const express=require('express');
// const Joi = require('joi');
// const { validatesignup } = require('./validator');
// const app=express();
// app.use(express.json());

// app.post('/signup',(req,res)=>{
// const{err,value}= validatesignup(req.body);
// if(err){
//     console.log(err);
//    return res.send(err.details)
// }
//     res.send('Successfully signed up!')
// });
// app.listen(3000,()=>{console.log('server started on port 3000');})

const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});