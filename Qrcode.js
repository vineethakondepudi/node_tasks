var qrcode=require('qrcode')
let data="Hello"
var djson=JSON.stringify(data)
// qrcode.toString(djson,{type:'terminal'},(err,res)=>
// {
// if(err)
// console.log(err);
// console.log(res);
// })
qrcode.toFile("qrcode.png",djson,(err,data)=>
{
if(err)
console.log(err);
console.log(data);
})