'use strict';
const express = require('express');
const router = express.Router();
const routeNames = require('../resources/routeNames');
const nodeService = require('../app/services/nodeService');

router.get(routeNames.emptyUrl, async (request, response) => {
	const allNodes = await nodeService.findAll(request, response);
	response.send(allNodes)
});

module.exports = router;