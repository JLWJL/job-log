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
	app.use(bodyPaser.json());
	app.use(bodyPaser.urlencoded({extended:true}));

	app.use((req, res, next)=> {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

	//
	// Routes
	//
	app.use('/job',jobRoutes)


	return app;
}