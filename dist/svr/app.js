'use strict';

var _server = require('react-dom/server');

var _App = require('./client/components/App');

var _App2 = _interopRequireDefault(_App);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = require('../../config/express');
var db = require('../../config/db');
var port = process.env.PORT || 3000;


var app = express();

app.use('/', function (req, res) {
	var page = (0, _server.renderToString)(_react2.default.createElement(_App2.default, null));
	res.send(page);
});

app.use(function (req, res, next) {
	res.send("Page not found");
});

db.connect(function (err) {
	if (err) {
		console.log("Can't establish connection to the database");
	} else {
		app.listen(port, function () {
			console.log('PORT ' + port + ' listening');
		});
	}
});