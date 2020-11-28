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

router.get(
    nombresRutas.emptyUrl + "/:cursoId/inscriptes",
    async (peticion, respuesta) => {
      try {
        if (Number(peticion.params.cursoId)) {
          const inscriptesDelCurso = await cursoService.encontrarInscriptesDeUnCurso(
            peticion.params.cursoId
          );
          respuesta.status(200).send(inscriptesDelCurso);
        } else {
          respuesta.status(400).send("IdCurso invalido");
        }
      } catch (error) {
        respuesta.status(400).send(error);
      }
    }
  );

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