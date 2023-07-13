const mysql    = require('mysql2');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'mayurdb'
});
connection.connect((err) => {
    if(err){
        console.log('error in DB connection : ' + JSON.stringify(err,undefined,2));
    }else{
        console.log('DB connected');
    }
});

module.exports=connection;