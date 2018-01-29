const express = require('express');
const port = process.env.PORT || 8000;
// import {renderToString} from 'react-dom/server';
// import  App from './client/components/App';
// import React from 'react';


const app = express();

app.use(express.static(__dirname + '/dist'));


app.use('/*', (req, res) => {
	console.log("Typed url handled");
	res.sendFile(__dirname + '/dist/index.html');
});

app.listen(port, () => {
	console.log(`PORT ${port} listening`);
});


module.exports = app;
