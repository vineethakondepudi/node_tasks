var mysql = require('mysql');
var express = require('express');
var app = express();
var bodyParser = require('body-parser')

var connection = mysql.createConnection({
    host:"172.17.15.100",
    user:"itguser10",
    password:"miracle@10",
    db:"vineetha1"
});
connection.connect((err)=>{
    if(!err){
        console.log("connected");
    }
    else{
        console.log(err);
    }
    
})

   
app.post('/api',(req,res)=>{

    connection.query("insert into login(username,password) values('"+req.body.username+"','"+req.body.password+"')",(err,data)=>{
     if(err){
       console.log(err);
       console.log("vinnu");
     }
     else{
       res.send(data)
     }
    })
   })

app.get('/',(req,res)=>{
    connection.query('select * from login',(err,data)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send(data)
        }
    })
})
app.listen(3000)