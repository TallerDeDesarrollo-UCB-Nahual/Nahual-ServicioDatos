'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const routeNames = require('./resources/routeNames');

const nodes = require('./routes/nodes');
const englishLevel = require('./routes/englishLevel');
const students = require('./routes/students');
const modules = require('./routes/modules');

class Application {
	constructor() {
		this.express = express();
		this.setUpRoutes();
		this.setUpNotFoundRoute();
		this.setUpExpress();
		this.setUpPort();
	}

	setUpRoutes() {
		this.express.use(routeNames.nodes.url, nodes);
		this.express.use(routeNames.englishLevels.url, englishLevel);
		this.express.use(routeNames.students.graduated.url, students);
		this.express.use(routeNames.modules.url, modules);
	}

	setUpExpress() {
		this.express.use(bodyParser.json())
		this.express.use(bodyParser.urlencoded({ extended: false }));
	}

	setUpPort() {
		this.express.set('port', process.env.PORT || 8000);
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