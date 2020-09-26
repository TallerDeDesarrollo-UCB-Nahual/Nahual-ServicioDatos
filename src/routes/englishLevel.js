'use strict';
const express = require('express');
const router = express.Router();
const routeNames = require('../resources/routeNames');
const englishLevelService = require('../app/services/englishLevelService');

router.get(routeNames.emptyUrl, async (request, response) => {
	const allEnglishLevels = await englishLevelService.findAll(request, response);
	response.send(allEnglishLevels);
});

module.exports = router;