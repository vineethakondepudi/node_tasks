var express = require('express');
var app = express();
var connection = require('express-myconnection');
var mysql = require('mysql');

var rows={};


var date1 = (new Date()).getTime();
app.use(
      connection(mysql,{
    host:"172.17.15.100",
    user:"itguser10",
    password:"miracle@10",
    database:"vineetha"
    },'request')
);



app.get('/api/entries', function(req, res){
req.getConnection(function(err, connection) {
    if(err) {
      console.log(err);
      res.status(500).send('Cannot get database connection');
    } else {
        connection.query("select * from nodetest", function(err, rows) {
          if(err) {
            console.log(err);
            res.status(500).send(err);
          } else {
            
            res.write(''+JSON.stringify(rows));
            var date2 = (new Date()).getTime();
            console.log('Count : '+rows.length+' Took Time to execute :'+(date2 - date1)/(60*60));
            //console.log(rows);
            //Now insert in another table ' nodetestcopy'
            for(var i in rows){
                connection.query("insert into nodetestcopy set ?", rows[i], function(err, rows) {
                  if(err) {
                    console.log(err);
                    //res.status(500).send(err);
                  } else {

                  }
      });
            }

          }
      });
    }
  });
});

app.listen(3660,()=>console.log("Server running at port 3660"));