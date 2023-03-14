// const {createPool}=require('mysql2');

const mysql=require('mysql');
const dotnav =require('dotenv');
dotnav.config();
const connection=createPool({
    host: process.env.HOST,
    user:process.env.USER,
    password:process.env.PASSWORD,
//     database:process.env.DB
// const connection=mysql.createConnection({
//     // host:process.env.HOST,
//     host:"172.17.15.100",
//     user:"itguser10",
//     password:"miracle@10",
//     database:"employedata"
})
connection.connect((err)=>
{
  if(!err)
  {
    console.log("connected")
  }
  else{
    console.log(err)
  }
})

// function getId(Id){
//     return new Promise((resolve,reject)=>{
//         if(Id){
//             connection.query('select from empdata2 where Id=?',[Id],(err,row,col)=>{
//                 if(err){
//                  reject(500)
//                 }
//                     resolve(row)
//                      })
//         }
//         connection.query('select * from empdata2',(err,row,col)=>{
//             if(err){
//              reject(500)
//             }
//                 resolve(row)
//                  })
//     })
    
// }

// function addId(I,n){

//     return new Promise((resolve,reject)=>{
// connection.query('insert into empdata2(Id,name) values(?,?)',[I,n],
//   function(err,res){
//     if(err){
//         reject(500)        
//     }
//     resolve(res)
//   })
// })
// }

// function updateId(n,I){
//     return new Promise((resolve,reject)=>{
//     connection.query('update empdata2 set name=? where Id=?',[n,I],
//     function(err,res){
//       if(err){
//           reject(500)
//       }
//       resolve(res)
//     })
//     })
//   }

//   function deleteId(Id){
//     return new Promise((resolve,reject)=>{
//     connection.query('delete from empdata2 where id=?',[Id],
//     function(err,res){
//       if(err){
//           reject(500)
//       }
//       resolve(res);
//     })
//     })
//   }
// // getId();
// // addId(1,'koti');
// // updateId(1,"vinnu");
// // deleteId(3);
// module.exports={getId,addId,updateId,deleteId}
