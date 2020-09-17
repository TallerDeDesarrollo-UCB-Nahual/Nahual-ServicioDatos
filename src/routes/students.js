'use strict';
const express = require('express');
const router = express.Router();
const routeNames = require('../resources/routeNames');
const studentService = require('../app/services/studentService');

router.get(routeNames.emptyUrl, async (request, response) => {
	const allGraduates = await studentService.findGraduatedStudents(request, response);
	response.set('Content-type', 'application/json');
	response.end(JSON.stringify(allGraduates));
});

router.get(routeNames.students.graduated.unemployeds.url, async (request, response) => {
	const allUnemployedGraduates = await studentService.findUnemployedGraduatedStudents(request, response);
	response.set('Content-type', 'application/json');
	response.end(JSON.stringify(allUnemployedGraduates));
});

router.get(routeNames.students.graduated.filterByEnglishLevel.url, async (request, response) => {
	const studentsByEnglishLevel = await studentService.filterStudentsByEnglishLevel(request, response);
	response.set('Content-type', 'application/json');
	response.end(JSON.stringify(studentsByEnglishLevel));
});

router.get(routeNames.students.graduated.filterByModule.url, async (request, response) => {
	const studentsByModule = await studentService.filterStudentsByModule(request, response);
	response.set('Content-type', 'application/json');
	response.end(JSON.stringify(studentsByModule));
});

module.exports = router;