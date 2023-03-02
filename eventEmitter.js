// 1.
// const EventEmitter=require('events');

// class Shoppings extends EventEmitter{
//     constructor(){
//         super()
//     }
// }
// const myEmitter=new Shoppings();
//  myEmitter.on('orders',()=>{
//     console.log('Order placed');
//  })
//  myEmitter.on('orders',(data)=>{
//     console.log(`${data} Order placed`);
//  })

//  myEmitter.emit('orders',2);




// 2.

//  const http=require('http');

//  const server=http.createServer()

//  server.on('request',()=>{
//     console.log('hits the server');
//  })

//  server.listen(3000, ()=>{
//     console.log('connected to port 3000');
//  })


// 3.
// // Importing events
// const EventEmitter = require('events');
   
// // Initializing event emitter instances 
// var eventEmitter = new EventEmitter();
  
// // Registering to myEvent 
// eventEmitter.on('myEvent', (msg) => {
//    console.log(msg);
// });
  
// // Triggering myEvent
// eventEmitter.emit('myEvent', "First event");//First event


// 4.

const EventEmitter=require('events');
const myEmitter=new EventEmitter;


var vinnu1=(msg)=>{
    console.log('First calling:'+msg);
}
var vinnu2=(msg)=>{
    console.log('Second calling:'+msg);
}
myEmitter.on('calling',vinnu1);
myEmitter.on('calling',vinnu1);
myEmitter.on('calling',vinnu2);
myEmitter.removeListener('calling',vinnu1)
myEmitter.emit('calling',"vineetha");
myEmitter.removeAllListeners('calling')



