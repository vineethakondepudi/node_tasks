// const socket = new WebSocket("ws://localhost:3000");

// socket.onopen = () => {
//   socket.send("Hello!");
// };

// socket.onmessage = (data) => {
//   console.log(data);
// };


// const express = require('express'); // using express
// const socketIO = require('socket.io');
// const http = require('http')
// const port = process.env.PORT||6000 // setting the port
// let app = express();
// let server = http.createServer(app)
// let io = socketIO(server)
 
// server.listen(port);
var app = require('express' )();
var http = require( 'http' ).createServer( app );
var io = require( 'socket.io')( http );

const PORT = 3000;

app.get( '/', function( req, res ) {
res.sendFile( __dirname + '/public/index.html' );
});

http.listen( PORT, function() {
console.log( 'listening on *:' + PORT );
});

io.on( 'connection', function( socket ) {
console.log('a user has connected!' );
});