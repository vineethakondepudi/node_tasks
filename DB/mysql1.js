var mysqlx = require('mysql2');
mysqlx.getSession({
    host:"172.17.15.100",
    user:"itguser10",
    password:"miracle@10",
    database:"dummy"
}).then(function (session) {
  var schema = session.getSchema('mySchema');
  schema.existsInDatabase().then(function (exists) {
    if (!exists) {
      session.createSchema('mySchema').then(function(schema){
      console.log('Schema created');
      session.close();
      });
    }
    else {
      console.log('Schema already exists');
      session.close();
    }
  });
}).catch(function (err) {
  console.log(err.message);
  console.log(err.stack);
});