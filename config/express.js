'use strict';

const express = require('express');
const bodyPaser = require('body-parser');

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
	app.use('/', (req, res)=>{
		res.send("running");	
	});


	return app;
}