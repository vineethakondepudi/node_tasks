const mysql=require('mysql2');
const connection=mysql.createConnection({
    host:"172.17.15.100",
    user:"itguser10",
    password:"miracle@10",
    database:"vineetha"
})


module.exports=connection;
