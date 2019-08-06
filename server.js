var cors = require('cors')
const port = process.env.PORT || 5000;
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var mysql = require('mysql');


app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.use(cors())


var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'robin',
  password : 'password',
  database : 'testing'
});

//Connection/Disconnect to MySQL database
connection.connect();


// Displays that we are listening
app.listen(port, () => console.log(`Listening on port ${port}`));


app.post('/create', (req, res) => {
    var author = req.body.author;
    let message = req.body.message;
    let headline = req.body.headline;

    var sql = `INSERT INTO posts 
            (
                author, message, headline
            )
            VALUES
            (
                ?, ?, ?
            )`;
    connection.query(sql, [author, message, headline], function (err) {
    if (err) {
      throw err;
    } else {
       
    }
});
});
