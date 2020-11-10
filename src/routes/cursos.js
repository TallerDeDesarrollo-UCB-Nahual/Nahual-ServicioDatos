'use strict';
const express = require('express');
const router = express.Router();
const nombresRutas = require('../resources/nombresRutas');
const cursoService = require('../app/services/cursoService');

router.get(nombresRutas.emptyUrl, async(request, response) => {
    const todosLosCursos = await cursoService.encontrarTodosCursos(request, response);
    response.send(todosLosCursos)
});

router.post(nombresRutas.emptyUrl, async(request, response) => {
    try {
        const result = await cursoService.crearCurso(request, response);
        response.status(200).send(result);
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;