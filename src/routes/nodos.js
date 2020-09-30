'use strict';
const express = require('express');
const router = express.Router();
const routeNames = require('../resources/routeNames');
const nodoService = require('../app/services/nodoService');

router.get(routeNames.emptyUrl, async(request, response) => {
    const todosLosNodos = await nodoService.findAll(request, response);
    response.set('Content-type', 'application/json');
    response.end(JSON.stringify(todosLosNodos));
});

module.exports = router;