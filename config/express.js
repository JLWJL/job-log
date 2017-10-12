'use strict';

const express = require('express');
const bodyPaser = require('body-parser');
const jobRoutes = require('../api/routes/jobRoutes');

module.exports = function(){
	const app = express();
	console.log("app is ", app);

	//
	// Middlewares
	//

	app.all('*',(req, res, next)=> {
	  res.header("Access-Control-Allow-Origin", "*");
	  res.header("Access-Control-Allow-Methods", 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	  next();
	});

	app.use(bodyPaser.urlencoded({extended:true}));
	app.use(bodyPaser.json());

	//
	// Routes
	//
	app.use('/job',jobRoutes)


	app.use('/*', (req,res)=>{
		console.log("Typed url handled");
		res.sendFile(__dirname+'dist/index.html');
	});

	return app;
}