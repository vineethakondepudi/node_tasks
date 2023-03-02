// const { rmSync } = require('fs');
// const http=require('http');
// const hostname='localhost';
// const port=3100;
// const server=http.createServer((req,res)=>{
//     res.statusCode=200;
//     res.statusMessage = "Current password does not match";
//     res.setHeader("Content-Type","text/html");
//     res.end("<h1>Hello Vineetha </h1>")
// });
// server.listen(port,hostname,()=>{
//     console.log(`Server is running on localhost:${port}`);
// });




// let http=require('http');
// http.createServer((req,res)=>{
//     res.write("Hello Vinee");
//     res.end();
// }).listen(3000)

// let http=require('http');
// http.createServer((req,res)=>{
//     res.writeHead(200, {'Content-Type':'text/html'})
//     res.write(req.url);
//     res.end();
// }).listen(3000)

//status code
// let http=require('http');
// console.log(http.STATUS_CODES);

//Methods
// let http=require('http');
// console.log(http.METHODS);

//Sockets
// const server = require('http').createServer();
// const io = require('socket.io')(server);
// io.on('connection', client => {
//   client.on('event', data => { /* … */ });
//   client.on('disconnect', () => { /* … */ });
// });
// server.listen(3000);

// const app = require('express')();
// const server = require('http').createServer(app);
// const io = require('socket.io')(server);
// io.on('connection', () => { /* … */ });
// server.listen(3000);

// const express=require('express')
// const app=express()
// const server=require('http').createServer(app)
// // const port=process.env.PORT||3000

// const socketio=require('socket.io')(server, {cors:{origin:"*"}})

// app.set('view engine','ejs')

// app.get('/home',(req,res)=>
// {
// res.render('home')
// })

// server.listen(4000,()=>
// {
// console.log('server running')
// })
// socketio.on('connection',(socket)=>
// {
// console.log('user connected'+socket.id)
// socket.on('message',(data)=>
// {
// socket.broadcast.emit('message',data)
// })
// })

// var data = [
//   {
//     id: 1,
//     name: "Vandanarani Kottapalli",
//     age: 22,
//     language: ["JavaScript", "Angular", "Node.js"],
//   },
//   {
//     id: 2,
//     name: "Hema Marada",
//     age: 22,
//     language: ["JavaScript", "Angular", "Node.js"],
//   },
//   {
//     id: 3,
//     name: "Vineetha Kondepudi",
//     age: 22,
//     language: ["JavaScript", "Angular", "Html"],
//   },
//   {
//     id: 4,
//     name: "Barnbas Telagareddy",
//     age: 22,
//     language: ["SQL", "Angular", "Node.js"],
//   },
//   {
//     id: 5,
//     name: "Chinna Anaparthi",
//     age: 22,
//     language: ["JavaScript", "Angular", "Node.js"],
//   },
// ];

// var express = require("express");
// var app = express();
// app.get("/qqq", (req, res) => {
//   res.send('Hello vinnu');
// });
// app.get("/api", (req, res) => {
//   res.send(data);
// });

// app.post("/api", (req, res) => {
//   console.log(req.body);
//   data.push(req.body);
//   res.sendStatus(201);
// });

// app.delete("/api/:name", (req, res) => {
//   var d = data.find((c) => c.name === req.params.name);
//   const index = data.indexOf(d);
//   data.splice(index, 1);
//   res.send(d);
// });

// app.put("/api/data/:id", (req, res) => {
//   var d = data.find((c) => c.id === parseInt(req.params.id));
//   d.language = req.body.language;
//   d.name = req.body.name;
//   res.send(d);
// });
// app.listen(3200, () => {
//   console.log("connected");
// });

// const sequelize = require('sequelize');

// const Sequelize = new sequelize('sequelize','itguser10','miracle@10',{
//     dialect:'mysql'
// })
// Sequelize.authenticate().then(()=>{
//     console.log("Success");
// }).catch((Err)=>{
//     console.log("Fail");
// });
// console.log("Anothe task");


//nodejs-express-sequelize-mysql
 const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models/index");

db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

// // drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

require("./app/routes/turorial.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
