'use strict';
const express = require('express');
const router = express.Router();
const nombresRutas = require('../resources/nombresRutas');
const nodoService = require('../app/services/nodoService');

router.get(nombresRutas.emptyUrl, async(request, response) => {
    const todosLosNodos = await nodoService.encontrarTodosLosNodos(request, response);
    response.send(todosLosNodos)
});

module.exports = router;