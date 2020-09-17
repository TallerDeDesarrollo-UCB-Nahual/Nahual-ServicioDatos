'use strict';
const express = require('express');
const router = express.Router();
const routeNames = require('../resources/routeNames');
const studentService = require('../app/services/studentService');

router.get('/:id', async (request, response) => {
 	const allGraduates = await studentService.findGraduatedById(request.params.id);
	response.set('Content-type', 'application/json');
	response.end(JSON.stringify(allGraduates));
});

router.get(routeNames.emptyUrl, async (request, response) => {
	const allGraduates = await studentService.findGraduatedStudents(request, response);
	response.set('Content-type', 'application/json');
	response.end(JSON.stringify(allGraduates));
});

router.get(routeNames.students.graduated.unemployeds.url, async (request, response) => {
	let parameters = request.query;
	parameters.statusName = 'Egresade';
	parameters.isEmployed = false
  const result = await studentService.findUnemployedGraduatedStudents(parameters);
	response.set('Content-type', 'application/json');
	response.end(JSON.stringify(result));
});

module.exports = router;