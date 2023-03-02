const express=require('express');
const router=express.Router();
router.get('/',(req,res)=>{
    res.send('get request for products');
});
router.get('/get-product',(req,res)=>{
    res.send('get requist for products');
});

module.exports=router;