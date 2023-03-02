const express = require('express');
const app=express();
const expressWinston = require('express-winston');
const {transports} = require('winston');
const { format } = require('./DB/mysql');

app.use(expressWinston.logger({
    transports:[
        new transports.Console()
    ],
    format:format.combine(
        format.json(),
        format.timestamp(),
        format.prettyPrint()
    )
    
}))


app.get('/',(req,res)=>{
  
        res.sendStatus(200)
})
app.listen(8000,()=>{console.log('server running at port 8000');})
