const express = require('express');
// const db = require('./DBserver')
const { createPool } = require('mysql');
const router = express.Router();
const multer = require('multer');
const storage = multer.diskStorage({
    destination:function(req,file,cb){
      cb(null,'./uploads/');
    },
    fileName:function(req,file,cb){
      cb(null,new Date().toISOString()+file.originalname);
    }
});

const upload = multer({storage:storage})
 
router.get('/',(req,res,next)=>{
   res.status(200).json({
    message:'Handling GET requests to /products'
   })
});

router.post('/',upload.single("productImage"),(req,res,next)=>{
  
    const product = {
        name:req.body.name,
        price:req.body.price,
        productImage:req.body.productImage
    };
    res.status(201).json({
     message:'Handling POST requests to /products',
     createdProduct: product
    });
 });
 
 router.get('/:productId',(req,res,next)=>{
    const id= req.params.productId;
    if(id==='special'){
        res.status(200).json({
            message:"You discovered the special Id",
            id:id
        })
    }
    else{
        res.status(200).json({
            message:'You passed an Id'
        });
    }
 });

 router.patch('/:productId',(req,res,next)=>{
    res.status(200).json({
        message:'Updated product!'
    })
 });
 router.delete('/:productId',(req,res,next)=>{
    res.status(200).json({
        message:'Deleted product!'
    });

 });
 module.exports=router;