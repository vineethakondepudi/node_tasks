// const obj1={name:"vineetha"};
// const obj2=obj1;
// obj2.name="vineetha kondepudi";
// console.log(obj1);


// const http=require('http');
// http.createServer((req,res)=>{
//     res.write("Hello vineetha");
//     res.end("vinnu")
    
// }).listen(3000)
var express = require('express');
var cors = require('cors');
var app = express();
app.use(express.json());
app.get('/',(req,res)=>{
res.json({message:"welcome to postman"})
})
app.listen(2000,console.log('server running at port 2000'))