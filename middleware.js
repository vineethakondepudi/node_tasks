const express = require('express');
const app = use.express();
app.use((req,res,next)=>{
 console.log("First middleware");
})
app.listen(3000,()=>{
    console.log('server started in 3000 port');
})