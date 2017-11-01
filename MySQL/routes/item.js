var express = require('express');
var router = express.Router();
var mysql=require("mysql");
var connection=mysql.createPool({
	host:'localhost',
	user:'root',
	password:'123456',
	database:'sousuo'
})

router.post('/list', function(req, res, next) {
	var bb=req.body.aa;
	res.header("Access-Control-Allow-Origin","*")
  connection.query('SELECT * FROM sou WHERE name LIKE "%'+bb+'%"',
	  function(err, rows, fields) {
	  	res.send(rows)
	  });
});


module.exports = router;
