'use strict';
const express = require('express');
const router = express.Router();
const studentService = require('../app/services/studentService');
const routeNames = require('../../src/resources/routeNames')

router.get(routeNames.emptyUrl, async (request, response) => {
    const allGraduates = await studentService.findStudents(request, response);
	response.send(allGraduates)
});

router.get('/:id', async (request, response) => {
    const allGraduates = await studentService.findGraduateById(request.params.id);
    response.send(allGraduates);
});

router.put('/:id',async (request,response)=>{
    try {
        const result = await studentService.updateStudent(request,response);
        response.status(200).send(result);
    } catch (error) {
        console.log(error);
    }
});

router.post(routeNames.emptyUrl, async (request,response)=>{
    try {
        const result = await studentService.createStudent(request,response);
        response.status(200).send(result);
    } catch (error) {
        console.log(error);
    }
});

router.delete('/:id',async (request,response)=>{
    try {
        const result = await studentService.deleteStudent(request,response);
        response.status(200).send(result);
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;