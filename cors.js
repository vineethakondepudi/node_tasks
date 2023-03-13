// var express = require('express')
// var cors = require('cors')
// var app = express()
 
// var corsOptions = {
//     origin: function (origin, callback) {
//       if (whitelist.indexOf(origin) !== -1 || !origin) {
//         callback(null, true)
//       } else {
//         callback(new Error('Not allowed by CORS'))
//       }
//     }
//   }
 
// app.get('/products/:id', cors(corsOptions), function (req, res, next) {
//   res.json({msg: 'This is CORS-enabled for only example.com.'})
// })
 
// app.listen(80, function () {
//   console.log('CORS-enabled web server listening on port 80')
// })







// var express = require('express')
// var cors = require('cors')
// var app = express()
// var fs=require('fs')

// var corsOptions = {
// origin: 'http://172.17.12.139:8085/products',
// optionsSuccessStatus: 200
// }

// app.get('/products', cors(corsOptions), function (req, res, next) {
// res.json({msg: 'This is vineetha'})

// fs.writeFile('text1.txt',"{msg: 'vineetha kondepudi'}",(err)=>{
// if(err){
// console.log(err);
// }
// else{
// console.log('Success');
// }
// })
// })

// app.listen(8085,'172.17.12.39',()=>console.log('http://172.17.12.39:8085/products'))
















// var http = require('http'),
//     fs = require('fs');
    
// var post_options = {
//     host: '172.17.13.139',
//     path: '/',
//     port: 3030,
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/x-www-form-urlencoded'
//     }
// }
// var sender = http.request(post_options, function(res) {
//     if (res.statusCode < 399) {
//         var text = ""
//         res.on('data', function(chunk) {
//             text += chunk
//         })
//         res.on('end', function(data) {
//             console.log(text)
//         })
//     } else {
//         console.log("ERROR", res.statusCode)
//     }
// })
// // fs.readFileSync(__dirname+'\\text1.txt','utf8')
// var POST_DATA = 'data={['
// POST_DATA += fs.readFileSync(__dirname+'\\text1.txt','utf8').toString().replace(/\,+$/,'')
// POST_DATA += ']}'
// console.log(POST_DATA)
// sender.write(POST_DATA)
// sender.end()



const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.json({ message: 'Hello World!' }))

app.listen(port, () => console.log(`This is the beginning of the Node File Upload App`))




 