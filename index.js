
// const variable=require('./variable.js');
// const fs=require('fs');
// console.log(variable.name);
// console.log(variable.age);
// console.log(variable.fun(100,121));
// console.log(variable.sum);
// console.log(variable.sum1);
// let data=fs.readFileSync(__dirname+'\\text1.txt','utf8')
// console.log(data);


// Local Module
// const sum=require("./Localmodule");
// console.log(sum.add(12,18));

//Core Module
// let  module = require('module_name');

//node-cron
// var cron = require('node-cron');
// cron.schedule('* * * * *', () => {
//   console.log('running a task every minute');
// });


//DB
// const connection =require('./DB/mysql');
// const cron=require('node-cron');
// connection.connect((err)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log("DB connected");
// });
// cron.schedule('*/2 * * * * *',()=>{
//     connection.query('insert into emp values(2,2000)');
// });

//crud operations

// var connection=require('./DB/mysql');
// var express=require('express');
// var app=express();
// const bodyparser=require('body-parser');
// app.use(bodyparser.json)
// connection.connect((err)=>{
//     if(!err)
//     console.log('DB connection succeded');
//    else
//    console.log('DB connection failed \n Error :'+JSON.stringify(err,undefined, 2));   
// });
// app.listen(3000,()=>{console.log('Express server is running:3000');});
// app.get('/employess',(req,res)=>{
//     connection.query('select * from emp',(err,row,fields)=>{
//         if(!err)
//         console.log(row);
//         console.log(err);
//     })
// })

// connection.end();

// Express
var express=require('express');
var app=express();
const joi = require('joi');
const sweggerJsDoc = require('swagger-jsdoc');
const sweggerUi = require('swagger-ui-express');
const { response } = require('./app');
const yaml = require('./data.yaml')
app.use(express.json())
const schema=joi.object({
    id:joi.number().integer().min(1),
    name:joi.string().max(20).message('hiiiiiiiii').required(),
    age:joi.number().integer().min(10),
    language:joi.required()
    })

const options = {
    definition:{
        openapi:'3.0.0',
        info:{
            title:'Node JS API Project',
            version:'1.0.0'
        },
        servers:[
            {
             url: 'http://localhost:8080/'
            }
        ]
    },
    apis:['./index.js']
}

const sweggerSpec = sweggerJsDoc(options)
app.use('/api-docs', sweggerUi.serve, sweggerUi.setup(sweggerSpec))

// /**
//  * @swagger
//  * /:
//  *  get:
//  *      summary: This api is used to check if get method is working or not
//  *      description: This api is used to check if get method is working or not
//  *      responses: 
//  *          200:
//  *              description: To test get method
//  */

app.get('/',(req,res)=>{
   res.send(`Hello vinnu`)
});
var data=require('./express/data')


/**
 * @swagger
 *  components:
 *      schemas:
 *          Book:
 *              type: object
 *              properties:
 *                  id:
 *                      type: integer
 *                  name:
 *                      type: string
 *                  age:
 *                      type: integer
 *                  language:
 *                      type: array
 */

/**
 * @swagger
 * /api:
 *  get:
 *      summary: To get the data from mysql 
 *      description: This api is used to fetch data from mysql
 *      responses: 
 *          200:
 *              description: This api is used to fetch data from mysql
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items: 
 *                              $ref: '#components/schemas/Book'
 */
app.get('/api',(req,res)=>{
    res.send(data);
    // var traininObj={
    //     order_Id:10,
    //     Amount:200,
    //     active:true
    // }
    // res.send(traininObj)
    });

/**
 * @swagger
 * /api/{id}:
 *  get:
 *      summary: To get the data from mysql 
 *      description: This api is used to fetch data from mysql
 *      parameters: 
 *          - in: path
 *            name: id
 *            requires: true
 *            description: Numeric Id required
 *            schema: 
 *              type: integer
 *      responses: 
 *          200:
 *              description: This api is used to fetch data from mysql
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items: 
 *                              $ref: '#components/schemas/Book'
 */ 
    app.get('/api/:id',(req,res)=>{
        var d=data.find(c=>c.id===parseInt(req.params.id))
        res.send(d)  
    });
/**
 * @swagger
 * /api:
 *  post:
 *      summary: Used to insert data to mysql
 *      description: This api is used to fetch data from mysql
 *      requestBody: 
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schemas/Book'
 *      responses: 
 *          200:
 *              description: Created
 */
app.post('/api',(req,res)=>{
    const{error,value}=schema.validate(req.body)
if(error)
{
console.log(error);
return res.send(error.message)
}
    console.log(req.body);
    data.push(req.body);
    res.sendStatus(201)
});

/**
 * @swagger
 * /api/{name}:
 *  delete:
 *      summary: Used to delete data to mysql
 *      description: This api is used to delete data from mysql
 *      parameters: 
 *          - in: path
 *            name: name
 *            requires: true
 *            description: Numeric Id required
 *            schema: 
 *              type: string
 *      requestBody: 
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schemas/Book'
 *      responses: 
 *          200:
 *              description: Deleted
 */
app.delete('/api/:name',(req,res)=>{
  var d=data.find(c=>c.name===req.params.name);
  const index=data.indexOf(d);
  data.splice(index,1);
  res.send(d);
});

/**
 * @swagger
 * /api/data/{id}:
 *  put:
 *      summary: Used to update data to mysql
 *      description: This api is used to fetch data from mysql
 *      parameters: 
 *          - in: path
 *            name: id
 *            requires: true
 *            description: Numeric Id required
 *            schema: 
 *              type: integer
 *      requestBody: 
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schemas/Book'
 *      responses: 
 *          200:
 *              description: Update
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items: 
 *                              $ref: '#components/schemas/Book'
 */
app.put('/api/data/:id',(req, res)=>
{
var d=data.find(c=>c.id===parseInt(req.params.id))
d.language = req.body.language;
d.name=req.body.name;
res.send(d);

})
app.put('/api/:name',(req,res)=>{
    var d=data.find(c=>c.name===req.params.name);
    d.name=req.body.name;
    res.send(d);
    
})
// app.listen(8080,()=>{console.log('Connected');})
app.listen(8080,'172.17.12.39',()=>console.log('listening on http://172.17.12.39:8080/api'))



//.env

// const express = require('express');
// const app = express();
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const router = express.Router();
// const PORT = 2000;

// app.use(cors());
// const dotenv = require('dotenv');
// dotenv.config();
// const host = process.env.HOST;
// const user = process.env.USER;

// console.log(`DB HOST :: ${host}`);
// console.log(`DB USERNAME :: ${user}`);
// console.log(`NODE ENV:: ${process.env.NODE_ENV}`);
