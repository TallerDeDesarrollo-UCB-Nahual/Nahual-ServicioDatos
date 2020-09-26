'use strict';
const express = require('express');
const bodyParser = require('body-parser')
const router = express.Router();
const routeNames = require('../resources/routeNames');
const studentService = require('../app/services/studentService');

var jsonParser = bodyParser.json()

router.get(routeNames.students.graduates.unemployes.url, async (request, response) => {
  let parameters = request.query;
  parameters.statusName = 'Egresade';
  parameters.isEmployed = false;
  const result = await studentService.findUnemployeGraduateStudents(parameters);
  response.send(result);
});

router.get(routeNames.emptyUrl, async (request, response) => {
	const allGraduates = await studentService.findGraduateStudents();
	response.send(allGraduates);
});

router.post(routeNames.emptyUrl, jsonParser, async (request, response) => {
	const status = await studentService.registerGradutateStudents(request, response);
  response.status(status).send("SUCCESS");
});

router.get('/:id', async (request, response) => {
  const allGraduates = await studentService.findGraduateById(request.params.id);
  response.send(allGraduates);
});

module.exports = router;