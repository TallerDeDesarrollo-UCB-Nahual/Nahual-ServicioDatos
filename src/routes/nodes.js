'use strict';
const express = require('express');
const router = express.Router();
const routeNames = require('../resources/routeNames');
const nodeService = require('../app/services/node');

router.get(routeNames.emptyUrl, async (request, response) => {
	response.send(await nodeService.findAll(request, response));
});

module.exports = router;