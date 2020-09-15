'use strict';
const express = require('express');
const router = express.Router();
const routeNames = require('../resources/routeNames');
const studentService = require('../app/services/studentService');

router.get("/list", async (request, response) => {
	const allGraduates = await studentService.findGraduatedStudents(request, response);
	response.set('Content-type', 'application/json');
	response.end(JSON.stringify(allGraduates));
});

router.get("/filterByEnglishLevel", async (request, response) => {
	const studentsByEnglishLevel = await studentService.filterStudentsByEnglishLevel(request, response);
	response.set('Content-type', 'application/json');
	response.end(JSON.stringify(studentsByEnglishLevel));
});

router.get("/filterByModule", async (request, response) => {
	const studentsByModule = await studentService.filterStudentsByModule(request, response);
	response.set('Content-type', 'application/json');
	response.end(JSON.stringify(studentsByModule));
});

module.exports = router;