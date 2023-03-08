//Socket_task1
// var app = require('express' )();
// var http = require( 'http' ).createServer( app );
// var io = require( 'socket.io')( http );

// const PORT = 3660;

// app.get( '/', function( req, res ) {
// res.sendFile( __dirname + '/public/index.html' );
// });

// http.listen( PORT, function() {
// console.log( 'listening on *:' + PORT );
// });

// io.on( 'connection', function( socket ) {
// console.log('a user has connected!' );
// });



//Socket_task2

// const socketio=require('socket.io')(server, {cors:{origin:"*"}})

// app.set('view engine','ejs')

// app.get('/home',(req,res)=>
// {
// res.render('home')
// })

// server.listen(4200,()=>
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