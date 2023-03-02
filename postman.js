const express = require('express');
const db = require('./database')
const app = express();
const sweggerJsDoc = require('swagger-jsdoc');
const sweggerUi = require('swagger-ui-express');
app.use(express.json());
app.use(express.urlencoded({extended:true}))

const options = {
  definition:{
      openapi:'3.0.0',
      info:{
          title:'Node JS API Project',
          version:'1.0.0'
      },
      servers:[
          {
           url: 'http://localhost:4100/'
          }
      ]
  },
  apis:['./postman.js']
}
const sweggerSpec = sweggerJsDoc(options)
app.use('/api-docs', sweggerUi.serve, sweggerUi.setup(sweggerSpec))
/**
 * @swagger
 * /:
 *  get:
 *      summary: This api is used to check if get method is working or not
 *      description: This api is used to check if get method is working or not
 *      responses: 
 *          200:
 *              description: To test get method
 */

 app.get('/',(req,res)=>{
  res.send(`Hello vinnu`)
});

app.listen(4100,()=>{
    console.log('server started at port 4100');
});

/**
 * @swagger
 *  components:
 *      schemas:
 *          API:
 *              type: object
 *              properties:
 *                  Id:
 *                      type: integer
 *                  name:
 *                      type: string
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
    db.getId()
    .then((d)=>res.send(d))
 .catch((c)=>res.send(c))
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
    db.addId(req.body.Id,req.body.name)
    .then(()=>res.send(req.body))
    .catch((c)=>res.send(c))
  });
/**
 * @swagger
 * /api:
 *  put:
 *      summary: Used to update data to mysql
 *      description: This api is used to fetch data from mysql
 *      parameters: 
 *          - in: path
 *            name: Id
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

  app.put('/api',(req,res)=>{
    db.updateId(req.body.name,req.body.Id)
    .then(()=>{res.send(req.body)})
    .catch((c)=>{res.send(c)})
  });

  /**
 * @swagger
 * /api:
 *  delete:
 *      summary: Used to delete data to mysql
 *      description: This api is used to delete data from mysql
 *      parameters: 
 *          - in: path
 *            name: Id
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
 
  app.delete('/api',(req,res)=>{
    db.deleteId(req.body.Id)
    .then(()=>{res.send("Deleted")})
    .catch((c)=>{res.send(c)})
  });
  app.patch('/api',(req,res)=>{
    res.send("Patch method success")
  })