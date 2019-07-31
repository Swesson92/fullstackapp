const express = require('express');
const app = express();
const port = process.env.PORT || 5000;


// Displays that we are listening
app.listen(port, () => console.log(`Listening on port ${port}`));

//GET route for testing
app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'robin',
  password : 'password',
  database : 'testing'
});

//Connection to MySQL database
connection.connect();

//Test query to see if everything works as expected
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});

connection.end();