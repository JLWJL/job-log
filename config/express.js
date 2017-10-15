'use strict';

const express = require('express');
const bodyPaser = require('body-parser');
const jobRoutes = require('../api/routes/jobRoutes')
const userRoutes = require('../api/routes/userRoutes');

module.exports = function(){
	const app = express();
	console.log("app is ", app);

	//
	// Middlewares
	//

	app.all('*',(req, res, next)=> {
	  res.header("Access-Control-Allow-Origin", "*");
	  res.header("Access-Control-Allow-Methods", 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	  res.header("Access-Control-Allow-Headers","Content-Type");
	  next();
	});

	app.use(bodyPaser.urlencoded({extended:true}));
	app.use(bodyPaser.json());

	//
	// Routes
	//
	app.use('/job',jobRoutes)
	app.use('/user', userRoutes)


	//
	// Error handling
	//
	app.use((err,req,res,next)=>{
		console.log("Error handled: ", err.message)
		res.status(err.status||400).send(err.message);
	});


	return app;
}