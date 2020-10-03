'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const nombresRutas = require('./resources/nombresRutas');
const cors = require('cors');
const nodos = require('./routes/nodos');
const nivelIngles = require('./routes/nivelIngles');
const egresades = require('./routes/egresades');
const estudiantes = require('./routes/estudiantes')
const modulos = require('./routes/modulos');
const ROUTE_URL = '/api';
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./config/swagger.json');

class Application {
    constructor() {
        this.express = express();
        this.setUpCors();
        this.setUpExpress();
        this.setUpRoutes();
        this.setUpSwagger();
        this.setUpNotFoundRoute();
        this.setUpPort();
    }

    setUpRoutes() {
        this.express.use(ROUTE_URL + nombresRutas.nodos.url, nodos);
        this.express.use(ROUTE_URL + nombresRutas.nivelIngles.url, nivelIngles);
        this.express.use(ROUTE_URL + nombresRutas.estudiantes.egresades.url, egresades);
        this.express.use(ROUTE_URL + nombresRutas.estudiantes.url, estudiantes);
        this.express.use(ROUTE_URL + nombresRutas.modulos.url, modulos);

    }

    setUpExpress() {
        this.express.use(bodyParser.json())
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }

    setUpPort() {
        this.express.set('port', process.env.PORT || 8000);
    }

    setUpNotFoundRoute() {
        this.express.use((request, response, next) => {
            const error = new Error("Resource not found");
            error.status = 404;
            next(error);
        });
    }

    setUpSwagger() {
        this.express.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    }

    setUpCors() {
        this.express.use(cors());
    }

}

module.exports = new Application().express;