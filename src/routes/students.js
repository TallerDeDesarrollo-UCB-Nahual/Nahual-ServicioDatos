'use strict';
const express = require('express');
const router = express.Router();
const studentService = require('../app/services/studentService');

router.get('/:id', async (request, response) => {
  const allGraduates = await studentService.findGraduatedById(request.params.id);
  response.set('Content-type', 'application/json');
  response.end(JSON.stringify(allGraduates));
});

module.exports = router;