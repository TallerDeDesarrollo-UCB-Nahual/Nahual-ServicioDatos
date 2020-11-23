'use strict';
const express = require('express');
const router = express.Router();
const estudianteService = require('../app/services/estudianteService');
const nombresRutas = require('../resources/nombresRutas')

router.get(nombresRutas.emptyUrl, async(request, response) => {
    let parameters = request.query;
    const todosLosEgresades = await estudianteService.encontrarEstudiantes(parameters);
    response.send(todosLosEgresades)
});

router.get('/DTO', async(request, response) => {
    let parameters = request.query;
    const todosLosEgresades = await estudianteService.encontrarEstudiantesDTO(parameters);
    response.send(todosLosEgresades)
});

router.get('/:id', async(request, response) => {
    const egresade = await estudianteService.encontrarEstudiantePorId(request.params.id);
    response.send(egresade);
});

router.get('/:id/DTO', async(request, response) => {
    const egresade = await estudianteService.encontrarEstudianteDTOPorId(request.params.id);
    response.send(egresade);
});

router.put('/:id', async(request, response) => {
    try {
        const result = await estudianteService.actualizarEstudiante(request, response);
        response.status(200).send(result);
    } catch (error) {
        console.log(error);
    }
});

router.post(nombresRutas.emptyUrl, async(request, response) => {
    try {
        const result = await estudianteService.crearEstudiante(request, response);
        response.status(200).send(result);
    } catch (error) {
        console.log(error);
    }
});

router.delete('/:id', async(request, response) => {
    try {
        const result = await estudianteService.eliminarEstudiante(request, response);
        response.status(200).send(result);
    } catch (error) {
        console.log(error);
    }
})

router.put('/cambiarEstadoAlumnes', async(request,response)=>{
    try {
        console.log(request.body)
        const result = await estudianteService.cambiarEstadoAlumnes(request, response);
        response.status(200).send(result);
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;