'use strict';
const express = require('express');
const router = express.Router();
const routeNames = require('../resources/routeNames');
const englishLevelService = require('../app/services/englishLevelService');

router.get(routeNames.emptyUrl, async (request, response) => {
	const allEnglishLevels = await englishLevelService.findAll(request, response);
	response.set('Content-type', 'application/json');
	response.end(JSON.stringify(allEnglishLevels));
});

module.exports = router;