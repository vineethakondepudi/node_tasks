var express = require('express');
var jwt = require('jsonwebtoken');
var bcrtpt = require('bcrypt');

var app = express();

app.get('/api',(req,res)=>{
res.json({
text:'my api'
})
});

app.post('/api/login',(req,res)=>{
//auth user
const userqq=id=3;
const token=jwt.sign({userqq}, 'my_secret_key',{expiresIn:"60sec"});
res.json({
token:token
});
});


app.get('/api/protect',ensureToken,(req,res)=>{
jwt.verify(req.token,'my_secret_key',(err,data)=>{
if(err){
res.sendStatus(403)
}

else{
    console.log(data);
res.send(data)
}
});

});

function ensureToken(req,res,next){
const bearerHeader = req.headers["authorization"];
if(typeof bearerHeader !== 'undefined'){
const bearer = bearerHeader.split(" ");
const bearerToken = bearer[1];
req.token = bearerToken;
next();
}
else{
res.sendStatus(403);
}
}
app.listen(4100,()=>{console.log('Server running at port 4100');})


// const express = require('express');
// const app = express()
// app.post('/login', function (req, res, next) {
//     let userdata = {
//     username: req.body.username,
//     password: req.body.password
//     };
    
//     //Go to server for user varificarion
//     if (userdata.username == "shashangka" && userdata.password == "12345") {
//     res.status(200).json({
//     message: 'Login Successful'
//     });
//     }
//     else {
//     res.status(401).json({
//     message: 'Login Failed'
//     });
//     }
//     });
//    app.listen(4100,()=>{console.log('Server running at port 4100');})