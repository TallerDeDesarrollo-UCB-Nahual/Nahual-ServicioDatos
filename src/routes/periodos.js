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

router.get("/:id", async (request, response) => {
    try {
        const periodo = await periodoService.encontrarPeriodoporId(request.params.id);
        response.send(periodo);
    } catch (error) {
        response.status(404).send({ "mensgitaje" : "Periodo no encontrado" });
    }
})

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

router.put("/:id", async(request, response) => {
    const result = await periodoService.editarPeriodo(request, response);
    response.status(200).send(result);
});


router.delete('/:id/cursos/:idCurso', async(request, response) => {
    try {
        const result = await servicioCursos.eliminarCursoEnPeriodo(request.params.id, request.params.idCurso);
        response.status(200).send(result);
    } catch (error) {
        console.log(error);
    }
});

router.delete('/:id', async(request, response) => {
    try {
        const result = await periodoService.eliminarPeriodo(request.params.id);
        response.status(200).send(result);
    }catch (error) {
        console.log(error);
    }
});

module.exports = router;