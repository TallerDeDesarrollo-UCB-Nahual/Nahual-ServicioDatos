'use strict';
const express = require('express');
const router = express.Router();
const routeNames = require('../resources/nombresRutas');
const moduloService = require('../app/services/moduloService');

router.get(routeNames.emptyUrl, async(request, response) => {
    const todosLosModulos = await moduloService.encontrarTodosLosModulos(request, response);
    response.set('Content-type', 'application/json');
    response.end(JSON.stringify(todosLosModulos));
});

module.exports = router;