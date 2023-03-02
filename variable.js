// var name="vineetha";
// var age=22;
// var fun=(a,b)=>{return a+b};
// var add=(a,b)=>{
//     return a+b;
// }
// const sum=add(10,11);
// const sum1=add(2,3);
// module.exports={name,age,fun,sum,sum1}



//#twilio#twilio#twilio#twilio

const accountSid = "AC785f096896164db171bec75065f74141";
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);
var express = require('express');
var twilio = require('twilio');
var dotenv = require('dotenv')
var app = express();
dotenv.config()

async function sendSMS(){
    const client = new twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN)

    return client.messages
    // client.messages
  .create({ body: "Hello from Twilio", from: "+12766183796", to: "+919705936200" })
  .then(message => console.log(message.sid))
    .catch(err=>{
        console.log(err,"msg not sent")
    })
}
sendSMS()
// app.get('/msg',(req,res)=>{
//     res.send("Hello")
// })
app.listen(5000)