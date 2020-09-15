'use strict';
const express = require('express');
const router = express.Router();
const routeNames = require('../resources/routeNames');
const moduleService = require('../app/services/moduleService');

router.get(routeNames.emptyUrl, async (request, response) => {
	const allModules = await moduleService.findAll(request, response);
	response.set('Content-type', 'application/json');
	response.end(JSON.stringify(allModules));
});

module.exports = router;