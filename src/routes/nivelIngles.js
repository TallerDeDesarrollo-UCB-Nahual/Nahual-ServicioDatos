'use strict';
const express = require('express');
const router = express.Router();
const routeNames = require('../resources/nombresRutas');
const nivelInglesService = require('../app/services/nivelInglesService');

router.get(routeNames.emptyUrl, async(request, response) => {
    const todosLosNivelesIngles = await nivelInglesService.encontrarTodosLosNivelesIngles(request, response);
    response.set('Content-type', 'application/json');
    response.end(JSON.stringify(todosLosNivelesIngles));
});

module.exports = router;