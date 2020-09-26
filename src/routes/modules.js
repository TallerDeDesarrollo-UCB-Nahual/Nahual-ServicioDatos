'use strict';
const express = require('express');
const router = express.Router();
const routeNames = require('../resources/routeNames');
const moduleService = require('../app/services/moduleService');

router.get(routeNames.emptyUrl, async (request, response) => {
	const allModules = await moduleService.findAll(request, response);
	response.send(allModules);
});

module.exports = router;