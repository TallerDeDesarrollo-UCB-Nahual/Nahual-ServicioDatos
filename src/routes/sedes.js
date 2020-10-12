'use strict';
const express = require('express');
const router = express.Router();
const nombresRutas = require('../resources/nombresRutas');
const sedeService = require('../app/services/sedeService');

router.get(nombresRutas.emptyUrl, async(request, response) => {
    const sedes = await sedeService.encontrarTodasLasSedes(request, response);
    response.send(sedes)
});

router.get('/estudianteID/:id', async(request, response) => {
    const sede = await sedeService.encontrarSedePorIdDeEstudiante(request.params.id);
    response.send(sede);
});

module.exports = router;