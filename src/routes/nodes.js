'use strict';
const express = require('express');
const router = express.Router();
const routeNames = require('../resources/routeNames');
const nodeService = require('../app/services/node');

router.get(routeNames.emptyUrl, async (request, response) => {
	const allNodes = await nodeService.findAll(request, response);
	response.set('Content-type', 'application/json');
	response.end(JSON.stringify(allNodes));
});

module.exports = router;