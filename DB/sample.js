var express=require('express');
var router=require();
var data=require('.data')
router.get('/',(req,res,next)=>{
    var query='select * from emp order bi order_Id desc';
    data.query(query, (err,data)=>{
        if(err){
            throw err;
        }
        else{
            res.render('sample', {title:'Node.js Mysql CRUD Application',action:'list',sampleData:data})
        }
    });
});
module.exports=router;