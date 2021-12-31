const mysql = require('mysql2');

var con=  mysql.createPool({
    connectionLimit:100,
    host: 'localhost',
    user: 'root',
    password:'',
    database:'TutorHub'
});

console.log("done");


module.exports=con;