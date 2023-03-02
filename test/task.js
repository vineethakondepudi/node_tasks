    let chai = require('chai');
    let chaihttp = require('chai-http');
    let server = require('../index');

    //Assertion style
    chai.should();

    chai.use(chaihttp);

    describe('Tasks Api',()=>{
        /**
         * Test the GET route
         */
        describe('GET /api',()=>{
            it('It should get all the tasks',(done)=>{
                chai.request(server)
                    .get("/api")
                    .end((err,res)=>{
                        res.should.have.status(200);
                        res.body.should.be.a('array');
                        res.body.length.should.be.eq(3);
                        done();
                    })
            })
        })

        /**
         * Test the GET(by id) route
         */

        /**
         * Test the POST route
         */

        /**
         * Test the DELETE route
         */

        /**
         * Test the PUT route
         */
    })
