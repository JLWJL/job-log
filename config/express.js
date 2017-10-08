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


	//
	// Routes
	//
	app.use('/job',jobRoutes)


	return app;
}