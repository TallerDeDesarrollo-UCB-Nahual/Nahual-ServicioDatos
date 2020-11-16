'use strict';
const express = require('express');
const router = express.Router();
const nombresRutas = require('../resources/nombresRutas');
const periodoService = require('../app/services/periodoService');
const cursoService = require('../app/services/cursoService');
const { request, response } = require('express');

router.get(nombresRutas.emptyUrl, async(request, response) => {
    let parametros = request.query;
    const todosLosPeriodos = await periodoService.encontrarTodosLosPeriodos(parametros);
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

router.delete('/:id/cursos/:idCurso', async(request, response) => {
    try {
        const result = await cursoService.eliminarCursoEnPeriodo(request.params.id, request.params.idCurso);
        response.status(200).send(result);
    } catch (error) {
        console.log(error);
    }
});

router.delete('/:id', async(request, response) => {
    try {
        const result = await periodoService.eliminarPeriodo(request.params.id);
    }catch (error) {
        console.log(error);
    }
});

module.exports = router;