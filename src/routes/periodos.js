'use strict';
const express = require('express');
const router = express.Router();
const nombresRutas = require('../resources/nombresRutas');
const periodoService = require('../app/services/periodoService');
const servicioCursos = require('../app/services/cursoService');

router.get(nombresRutas.emptyUrl, async(request, response) => {
    let parametros = request.query;
    const todosLosPeriodos = await periodoService.encontrarTodosLosPeriodos(parametros);
    response.send(todosLosPeriodos)
});

router.get("/:id/cursos", async(request, response) => {
    const cursos = await servicioCursos.encontrarCursosPorPeriodo({PeriodoId: request.params.id});
    response.send(cursos)
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
        const result = await servicioCursos.eliminarCursoEnPeriodo(request.params.id, request.params.idCurso);
        response.status(200).send(result);
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;