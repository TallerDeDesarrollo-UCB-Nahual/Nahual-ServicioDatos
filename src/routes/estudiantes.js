'use strict';
const express = require('express');
const router = express.Router();
const estudianteService = require('../app/services/estudianteService');
const routeNames = require('../resources/nombresRutas')

router.get(routeNames.emptyUrl, async(request, response) => {
    const todosLosEgresades = await estudianteService.encontrarEstudiantes(request, response);
    response.set('Content-type', 'application/json');
    response.end(JSON.stringify(todosLosEgresades));
});

router.get('/:id', async(request, response) => {
    const egresade = await estudianteService.encontrarEgresadePorId(request.params.id);
    response.set('Content-type', 'application/json');
    response.end(JSON.stringify(egresade));
});

router.put('/:id', async(request, response) => {
    try {
        const result = await estudianteService.actualizarEstudiante(request, response);
        response.status(200).send(result);
    } catch (error) {
        console.log(error);
    }
});
router.post(routeNames.emptyUrl, async(request, response) => {
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

module.exports = router;