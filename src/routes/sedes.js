'use strict';
const express = require('express');
const router = express.Router();
const nombresRutas = require('../resources/nombresRutas');
const sedeService = require('../app/services/sedeService');

router.put(nombresRutas.emptyUrl, async(request, response) => {
    try {
        const result = await sedeService.actualizarSede(request, response);
        response.status(200).send(result);
    } catch (error) {
        console.log(error);
    }
});

router.delete(nombresRutas.emptyUrl, async(request, response) => {
    try {
        const result = await sedeService.eliminarSede(request, response);
        response.status(200).send(result);
    } catch (error) {
        console.log(error);
    }
});

router.post(nombresRutas.emptyUrl, async(request, response) => {
    try {
        const result = await sedeService.crearSede(request, response);
        response.status(200).send(result);
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;