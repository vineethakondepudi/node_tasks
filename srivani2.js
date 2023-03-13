var express=require('express');
var app=express();
var database=require('./srivani');
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.listen(8085,'172.17.12.39',()=>console.log('http://172.17.12.39:8085'))

app.get("/get",(req,res)=>
{
database.getEmployee()
.then((empdata)=>
{
res.send(empdata);
})
.catch(()=>
{
res.send("Their is no data")
})

})
app.post("/post",(req,res)=>
{
database.addEmployee(req.body.title,req.body.author,req.body.cost)
.then((empdata)=>
{
res.send(empdata);
})
.catch(()=>
{
res.send("Their is no data")
})
})
app.put("/put",(req,res)=>
{
database.updateEmployee(req.body.title,req.body.author,req.body.cost,req.body.id,)
.then(()=>
{
res.send(req.body);
})
.catch(()=>
{
res.send("Their is no data")
})
})
app.delete("/delete",(req,res)=>
{

database.deleteEmployee(req.body.id)
.then((empdata)=>
{
res.send(empdata);
})
.catch(()=>
{
res.send("Their is no data")
})
})
