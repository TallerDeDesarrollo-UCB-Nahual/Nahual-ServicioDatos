'use strict';
const express = require('express');
const bodyParser = require('body-parser')
const router = express.Router();
const routeNames = require('../resources/routeNames');
const studentService = require('../app/services/studentService');

var jsonParser = bodyParser.json()

router.get(routeNames.emptyUrl, async (request, response) => {
	const allGraduates = await studentService.findGraduateStudents(request, response);
	response.set('Content-type', 'application/json');
	response.end(JSON.stringify(allGraduates));
});

router.post(routeNames.emptyUrl, jsonParser, async (request, response) => {
	const status = await studentService.registerGradutateStudents(request, response);
	response.status(status).send("SUCCESS")
});

module.exports = router;