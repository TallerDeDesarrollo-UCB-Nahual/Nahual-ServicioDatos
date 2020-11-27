'use strict';

module.exports = {
    emptyUrl: '',
    headquarters: {
        url: '/headquarters',
    },
    nodos: {
        url: '/nodos'
    },
    sedes: {
        url: '/sedes'
    },
    estados: {
        url: '/estados'
    },
    nivelIngles: {
        url: '/nivel-ingles'
    },
    modulos: {
        url: '/modulos'
    },
    estudiantes: {
        url: '/estudiantes',
        egresades: {
            url: '/egresades',
            desempleados: {
                url: '/desempleados'
            }
        }
    },
    periodos : {
        url: '/periodos',
    },
    cursos : {
        url: '/cursos',
        inscriptes: {
            url: '/cursos/:cursoId/inscriptes'
        }
    },
    inscriptos : {
        url: '/inscriptos',
    }

};