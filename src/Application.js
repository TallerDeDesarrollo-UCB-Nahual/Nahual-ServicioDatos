'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const routeNames = require('./resources/routeNames');

class Application {
	constructor() {
		this.express = express();
		this.setUpExpress();
		this.setUpRoutes();
		this.setUpNotFoundRoute();
		this.setUpPort();
	}

	setUpRoutes() {
		this.express.use(routeNames.nodes.url, require('./routes/nodes'));
		this.express.use(routeNames.englishLevels.url, require('./routes/englishLevel'));
		this.express.use(routeNames.students.graduates.url, require('./routes/graduates'));
		this.express.use(routeNames.students.student.url, require('./routes/students'));
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