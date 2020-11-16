'use strict';
const express = require('express');
const router = express.Router();
const nombresRutas = require('../resources/nombresRutas');
const moduloService = require('../app/services/moduloService');

router.get(nombresRutas.emptyUrl, async(request, response) => {
    const todosLosModulos = await moduloService.encontrarTodosLosModulos(request, response);
    response.send(todosLosModulos);
});

module.exports = router;
