'use strict';
const express = require('express');
const bodyParser = require('body-parser')
const router = express.Router();
const routeNames = require('../resources/nombresRutas');
const estudianteService = require('../app/services/estudianteService');

var jsonParser = bodyParser.json()

router.get(routeNames.estudiantes.egresades.desempleados.url, async(request, response) => {
    let parameters = request.query;
    parameters.nombreEstado = 'Egresade';
    parameters.esEmpleado = false;
    const result = await estudianteService.encontrarEstudiantesEgresadesDesempleados(parameters);
    response.set('Content-type', 'application/json');
    response.end(JSON.stringify(result));
});

router.get(routeNames.emptyUrl, async(request, response) => {
    const todosLosEgresades = await estudianteService.encontrarEstudiantesEgresades(request, response);
    response.set('Content-type', 'application/json');
    response.end(JSON.stringify(todosLosEgresades));
});

router.post(routeNames.emptyUrl, jsonParser, async(request, response) => {
    const status = await estudianteService.registrarEstudiantesEgresades(request, response);
    response.status(status).send("SUCCESS");
});

router.get('/:id', async(request, response) => {
    const todosLosEgresades = await estudianteService.encontrarEgresadePorId(request.params.id);
    response.set('Content-type', 'application/json');
    response.end(JSON.stringify(todosLosEgresades));
});

module.exports = router;