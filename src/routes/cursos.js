'use strict';
const express = require('express');
const router = express.Router();
const nombresRutas = require('../resources/nombresRutas');
const cursoService = require('../app/services/cursoService');

router.get(nombresRutas.emptyUrl, async(request, response) => {
    let parametros = request.query;
    const todosLosCursos = await cursoService.encontrarCursosPorPeriodo(parametros);
    response.send(todosLosCursos)
});

router.get(nombresRutas.emptyUrl+'/:cursoId/inscritos', async(request, response) => {
    const inscritosDelCurso = await cursoService.encontrarInscritosDeUnCurso(request.params.cursoId);
    response.send(inscritosDelCurso)
});

router.post(nombresRutas.emptyUrl, async(request, response) => {
    try {
        const result = await cursoService.crearCurso(request, response);
        response.status(200).send(result);
    } catch (error) {
        console.log(error);
    }
});

router.put("/:id", async(request, response) => {
    const result = await cursoService.editarCurso(request, response);
    response.status(200).send(result);
});

module.exports = router;