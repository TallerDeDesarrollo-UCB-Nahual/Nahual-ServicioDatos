'use strict';
const express = require('express');
const bodyParser = require('body-parser')
const router = express.Router();
const nombresRutas = require('../resources/nombresRutas');
const estudianteService = require('../app/services/estudianteService');

var jsonParser = bodyParser.json()

router.get(nombresRutas.emptyUrl, async(request, response) => {
    let parameters = request.query;
    //parameters.nombreEstado = 'Egresade';
    const result = await estudianteService.encontrarEstudiantesEgresadesPorNombre(parameters);
    response.set('Content-type', 'application/json');
    response.end(JSON.stringify(result));
});


router.get(nombresRutas.estudiantes.egresades.desempleados.url, async(request, response) => {
    let parameters = request.query;
    parameters.nombreEstado = 'Egresade';
    parameters.esEmpleado = false;
    const result = await estudianteService.encontrarEstudiantesEgresadesDesempleados(parameters);
    response.send(result);
});

router.get(nombresRutas.emptyUrl, async(request, response) => {
    const todosLosEgresades = await estudianteService.encontrarEstudiantesEgresades();
    response.send(todosLosEgresades);
});

router.post(nombresRutas.emptyUrl, jsonParser, async(request, response) => {
    const status = await estudianteService.registrarEstudiantesEgresades(request, response);
    response.status(status).send("SUCCESS");
});

router.get('/:id', async(request, response) => {
    const todosLosEgresades = await estudianteService.encontrarEgresadePorId(request.params.id);
    response.send(todosLosEgresades);
});

module.exports = router;