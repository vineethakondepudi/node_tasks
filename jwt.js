const express = require('express');
let app = express();
app.use (express.json());
app.use(function(req,res,next){
    res.header("Access-Control_Allow_Origin","*");
    res.header(
        "Access-Control_Allow_Headers",
        "Origin, X-Requested-With, Content_Type,Accept"
    );
    res.header("Access-Control_Allow_Credentials",true);
    next();
    });
    let port = 2410;
    app.listen(port, ()=>console.log(`Node app listennig on port ${port}!`));
    
    const jwt = require('jsonwebtoken');
    const db = require('./DB/mysql')
    const jwt_key = "secretkey237483";
    const jwtExpiryTime = 300;
    app.post('login',function(req,res){
    let {username,password} = req.body;
    let
    })