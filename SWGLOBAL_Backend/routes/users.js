const express = require('express');
const router = express.Router();
const mysqlcon = require('../models/db')

router.get('/',(req,res)=>{
  mysqlcon.query("SELECT * from users", (err,rows,field)=>{
    if(!err){
      res.send(rows);
    }else{
      console.log(err);
    }
  })
})

router.get('/test',(req,res)=>{
  mysqlcon.query("SELECT * from users", (err,rows,field)=>{
    if(!err){
      res.send(rows);
    }else{
      console.log(err);
    }
  })
})
router.get('/auth/:username.:password', function(request, response) {
	var username = request.body.params;
	var password = request.body.password;
	if (username && password) {
		connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
			if (results.length > 0) {
				request.session.loggedin = true;
				request.session.username = username;
				response.redirect('/home');
			} else {
				response.send('Incorrect Username and/or Password!');
			}			
			response.end();
		});
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
})
module.exports =router;
/* module.exports =app => {
  const users = require("../contoller/users.contoller");

  // Create a new users
  app.post("/users", users.create);

  // Retrieve all users
  app.get("/users", users.findAll);

  // Retrieve a single users with usersId
  app.get("/users/:userId", users.findOne);

  // Update a users with usersId
  app.put("/users/:userId", users.update);

  // Delete a users with usersId
 /app.delete("/users/:usersId", users.delete);

  // Delete a new Customer
 app.delete("/users", users.deleteAll);
}; */