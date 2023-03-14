const mysql=require('mysql');
const connection1=mysql.createConnection({
    host:"172.17.15.100",
    user:"itguser10",
    password:"miracle@10",
    database:"vineetha"
})
connection1.connect((err)=>
{
  if(!err)
  {
    console.log("database1 connected")
  }
  else{
    console.log(err)
  }
}) 
 
function getEmployee()
{ return new Promise((resolve,reject)=>
{
connection1.query("select * from srivani",(err,res)=>
{
if(err)
{
reject(err)
}
else{
resolve(res);
console.log(res)
}
})
})
}
function addEmployee(t,a,c)
{
return new Promise((resolve,reject)=>{
connection1.query("insert into srivani(title, author, cost) values(?,?,?)",[t,a,c],(err,res)=>
{
if(err)
{
reject(err)
}
else{
resolve(res);
}
})

})
}
function updateEmployee(i,t,a,c)
{ return new Promise((resolve,reject)=>{
connection1.query("UPDATE srivani SET  title=?, author=?, cost=? WHERE id=?",[i,t,a,c],(err,res)=>
{
if(err)
{
reject(err)
}
else{
resolve(res);
}
})
})
}
function deleteEmployee(i)
{
return new Promise((resolve,reject)=>{
connection1.query("delete from srivani where id=?",[i],(err,res)=>
{
if(err)
{
reject(err)
}
else{
resolve(res);
}
})
})
}
// function Deletetable()
// {
// return new Promise((resolve,reject)=>{
// pool.query(delete from empdata,(err,res)=>
// {
// if(err)
// {
// reject(err)
// }
// else
// {
// resolve(res);
// }
// })
// })
// }



module.exports={getEmployee,addEmployee,updateEmployee,deleteEmployee}