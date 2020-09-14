'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const routeNames = require('./resources/routeNames');

var nodes =  require('./routes/nodes');
var englishLevel =  require('./routes/englishLevel');
var students = require('./routes/students');

class Application {
	constructor() {
		this.express = express();
		this.setUpRoutes();
		this.setUpNotFoundRoute();
		this.setUpExpress();
		this.setUpPort();
	}

	setUpRoutes() {
		this.express.use("/nodes",nodes);
		this.express.use("/englisLevel",englishLevel);
		this.express.use('/student', students);
	}

	setUpExpress() {
		this.express.use(bodyParser.json())
		this.express.use(bodyParser.urlencoded({ extended: false }));
	}

	setUpPort() {
		this.express.set('port', process.env.PORT || 3000);
	}

	setUpNotFoundRoute() {
		this.express.use((request, response, next) => {
			const error = new Error("Resource not found");
			error.status = 404;
			next(error);
		});
	}
}

module.exports = new Application().express;