'use strict';
const express = require('express');
const router = express.Router();
const nombresRutas = require('../resources/nombresRutas');
const periodoService = require('../app/services/periodoService');

router.get(nombresRutas.emptyUrl, async(request, response) => {
    const todosLosPeriodos = await periodoService.encontrarTodosLosPeriodos(request, response);
    response.send(todosLosPeriodos)
});

router.post(nombresRutas.emptyUrl, async(request, response) => {
    try {
        const result = await periodoService.crearPeriodo(request, response);
        response.status(200).send(result);
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;