'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const routeNames = require('./resources/routeNames');

const nodes = require('./routes/nodes');
const englishLevel = require('./routes/englishLevel');
const graduates = require('./routes/graduates');
const students = require('./routes/students')
const modules = require('./routes/modules');
const ROUTE_URL = '/api';

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./config/swagger.json');
class Application {
	constructor() {
		this.express = express();
		this.setUpRoutes();
		this.setUpSwagger();
		this.setUpNotFoundRoute();
		this.setUpExpress();
		this.setUpPort();
	}

	setUpRoutes() {
		this.express.use(ROUTE_URL + routeNames.nodes.url, nodes);
		this.express.use(ROUTE_URL + routeNames.englishLevels.url, englishLevel);
		this.express.use(ROUTE_URL + routeNames.students.graduated.url, graduates);
		this.express.use(ROUTE_URL + routeNames.students.url, students);
		this.express.use(ROUTE_URL + routeNames.modules.url, modules);
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

	setUpSwagger() {
		this.express.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
	}
}

module.exports = new Application().express;