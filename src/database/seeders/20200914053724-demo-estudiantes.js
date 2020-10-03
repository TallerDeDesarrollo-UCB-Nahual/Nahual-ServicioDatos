'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Estudiantes', [{
                'nombreCompleto': 'clodomiro saavedra perez',
                'nombreEstado': 'Egresade',
                'fechaNacimiento': '1995-02-02',
                'correo': 'clodo.saavedra@gcorreo.com',
                'celular': 79840584,
                'nombreNodo': 'CABA',
                'añoGraduacion': 2019,
                'cuatrimestre': 1,
                'nivelIngles': 'Basico',
                'nombrePrimerTrabajo': 'Tsoft',
                'linkedin': 'https://linkedin/clodomiro',
                'esEmpleado': false,
                'modulo': 'Testing funcional'
            },
            {
                'nombreCompleto': 'Diego Figueroa',
                'nombreEstado': 'Egresade',
                'fechaNacimiento': '1992-02-01',
                'correo': 'diego.figueroa@gcorreo.com',
                'celular': 79340514,
                'nombreNodo': 'CABA',
                'añoGraduacion': 2020,
                'cuatrimestre': 2,
                'nivelIngles': 'Intermedio',
                'nombrePrimerTrabajo': 'Jamcity',
                'linkedin': 'https://linkedin/diegofigueroa',
                'esEmpleado': false,
                'modulo': 'Testing funcional'
            },
            {
                'nombreCompleto': 'Guillermo Posebon',
                'nombreEstado': 'Estudiante',
                'fechaNacimiento': '1998-07-02',
                'correo': 'guillermo.posebon@gcorreo.com',
                'celular': 798580584,
                'nombreNodo': 'CABA',
                'añoGraduacion': 2017,
                'cuatrimestre': 3,
                'nivelIngles': 'Basico',
                'nombrePrimerTrabajo': null,
                'linkedin': 'https://linkedin/guillermoposebon',
                'esEmpleado': false,
                'modulo': 'Testing funcional'
            },
            {
                'nombreCompleto': 'Gustavo Roca',
                'nombreEstado': 'Egresade',
                'fechaNacimiento': '1985-01-02',
                'correo': 'gustavo.roca@gcorreo.com',
                'celular': 77840584,
                'nombreNodo': 'Santa Fe',
                'añoGraduacion': 2010,
                'cuatrimestre': 1,
                'nivelIngles': 'Avanzado',
                'nombrePrimerTrabajo': null,
                'linkedin': 'https://linkedin/gustavoroca',
                'esEmpleado': false,
                'modulo': 'Testing funcional'
            },
            {
                'nombreCompleto': 'Adrian Torrez',
                'nombreEstado': 'Egresade',
                'fechaNacimiento': '1990-02-02',
                'correo': 'clodo.saavedra@gcorreo.com',
                'celular': 71140584,
                'nombreNodo': 'Banfield',
                'añoGraduacion': 2010,
                'cuatrimestre': 2,
                'nivelIngles': 'Intermedio',
                'nombrePrimerTrabajo': null,
                'linkedin': 'https://linkedin/adriantorrez',
                'esEmpleado': false,
                'modulo': 'Testing funcional'
            },
            {
                'nombreCompleto': 'Matias Centeno',
                'nombreEstado': 'Estudiante',
                'fechaNacimiento': '1990-02-02',
                'correo': 'matias.centeno@gcorreo.com',
                'celular': 79880584,
                'nombreNodo': 'CABA',
                'añoGraduacion': null,
                'cuatrimestre': 1,
                'nivelIngles': 'Basico',
                'nombrePrimerTrabajo': null,
                'linkedin': 'https://linkedin/matiascenteno',
                'esEmpleado': false,
                'modulo': 'Testing funcional'
            },
            {
                'nombreCompleto': 'Nicolas Cardozo',
                'nombreEstado': 'Egresade',
                'fechaNacimiento': '1995-10-10',
                'correo': 'nicolas.cardozo@gcorreo.com',
                'celular': 73330584,
                'nombreNodo': 'Santa Fe',
                'añoGraduacion': 2000,
                'cuatrimestre': 4,
                'nivelIngles': 'Avanzado',
                'nombrePrimerTrabajo': 'Tsoft',
                'linkedin': 'https://linkedin/nicocardozo',
                'esEmpleado': false,
                'modulo': 'Testing funcional'
            },
            {
                'nombreCompleto': 'Micaela Nunez',
                'nombreEstado': 'Egresade',
                'fechaNacimiento': '1995-11-11',
                'correo': 'micanu@gcorreo.com',
                'celular': 79555584,
                'nombreNodo': 'Santa Fe',
                'añoGraduacion': 2000,
                'cuatrimestre': 3,
                'nivelIngles': 'Intermedio',
                'nombrePrimerTrabajo': 'Tsoft',
                'linkedin': 'https://linkedin/micanu',
                'esEmpleado': false,
                'modulo': 'Testing funcional'
            },
            {
                'nombreCompleto': 'Maria callete',
                'nombreEstado': 'Egresade',
                'fechaNacimiento': '2001-02-02',
                'correo': 'mariacalle@gcorreo.com',
                'celular': 73947393,
                'nombreNodo': 'Itzunguo',
                'añoGraduacion': 2020,
                'cuatrimestre': 1,
                'nivelIngles': 'Intermedio',
                'nombrePrimerTrabajo': 'Tsoft',
                'linkedin': 'https://linkedin/mariacalle',
                'esEmpleado': false,
                'modulo': 'Testing funcional'
            },
            {
                'nombreCompleto': 'Florencia Bosch',
                'nombreEstado': 'Egresade',
                'fechaNacimiento': '1990-01-01',
                'correo': 'florencia.bosch@gcorreo.com',
                'celular': 6374857,
                'nombreNodo': 'Itzunguo',
                'añoGraduacion': 2020,
                'cuatrimestre': 3,
                'nivelIngles': 'Basico',
                'nombrePrimerTrabajo': 'Tsoft',
                'linkedin': 'https://linkedin/florenciabosch',
                'esEmpleado': false,
                'modulo': 'Testing Automation'
            },
            {
                'nombreCompleto': 'Alejandra Zamudio',
                'nombreEstado': 'Egresade',
                'fechaNacimiento': '1975-11-02',
                'correo': 'ale.zamudio@gcorreo.com',
                'celular': 7788782,
                'nombreNodo': 'CABA',
                'añoGraduacion': 2013,
                'cuatrimestre': 3,
                'nivelIngles': 'Intermedio',
                'nombrePrimerTrabajo': 'Tsoft',
                'linkedin': 'https://linkedin/alejandrazamudio',
                'esEmpleado': false,
                'modulo': 'Testing Automation'
            },
            {
                'nombreCompleto': 'Daniel Banquito',
                'nombreEstado': 'Egresade',
                'fechaNacimiento': '1991-01-01',
                'correo': 'daniel.banquito@gcorreo.com',
                'celular': 78665522,
                'nombreNodo': 'Santa Fe',
                'añoGraduacion': 2001,
                'cuatrimestre': 7,
                'nivelIngles': 'Basico',
                'nombrePrimerTrabajo': null,
                'linkedin': 'https://linkedin/danielbanquito',
                'esEmpleado': false,
                'modulo': 'Testing Automation'
            },
            {
                'nombreCompleto': 'Florimar Molina',
                'nombreEstado': 'Egresade',
                'fechaNacimiento': '1994-12-10',
                'correo': 'florimolina@gcorreo.com',
                'celular': 74095744,
                'nombreNodo': 'Santa Fe',
                'añoGraduacion': 2003,
                'cuatrimestre': 1,
                'nivelIngles': 'Avanzado',
                'nombrePrimerTrabajo': null,
                'linkedin': 'https://linkedin/florimolina',
                'esEmpleado': false,
                'modulo': 'Testing Automation'
            },
            {
                'nombreCompleto': 'Gaston Humano',
                'nombreEstado': 'Egresade',
                'fechaNacimiento': '1999-10-09',
                'correo': 'gaston.humano@gcorreo.com',
                'celular': 73834833,
                'nombreNodo': 'Santa Fe',
                'añoGraduacion': 2002,
                'cuatrimestre': 3,
                'nivelIngles': 'Basico',
                'nombrePrimerTrabajo': 'Tsoft',
                'linkedin': 'https://linkedin/gastohumano',
                'esEmpleado': false,
                'modulo': 'Testing Automation'
            },
            {
                'nombreCompleto': 'Michael Jackson',
                'nombreEstado': 'Egresade',
                'fechaNacimiento': '1995-05-05',
                'correo': 'michael.jackso@gcorreo.com',
                'celular': 73938372,
                'nombreNodo': 'Santa Fe',
                'añoGraduacion': 2006,
                'cuatrimestre': 3,
                'nivelIngles': 'Avanzado',
                'nombrePrimerTrabajo': null,
                'linkedin': 'https://linkedin/michaeljackson',
                'esEmpleado': false,
                'modulo': 'Introduccion a la programacion'
            },
            {
                'nombreCompleto': 'Kenji Lozano',
                'nombreEstado': 'Egresade',
                'fechaNacimiento': '1990-01-01',
                'correo': 'kenji.lozano@gcorreo.com',
                'celular': 7787452,
                'nombreNodo': 'CABA',
                'añoGraduacion': 2007,
                'cuatrimestre': 2,
                'nivelIngles': 'Intermedio',
                'nombrePrimerTrabajo': null,
                'linkedin': 'https://linkedin/kenjilozano',
                'esEmpleado': false,
                'modulo': 'Introduccion a la programacion'
            },
            {
                'nombreCompleto': 'Jorge Frias',
                'nombreEstado': 'Egresade',
                'fechaNacimiento': '2000-01-01',
                'correo': 'jorge.frias@gcorreo.com',
                'celular': 78564898,
                'nombreNodo': 'CABA',
                'añoGraduacion': 1999,
                'cuatrimestre': 3,
                'nivelIngles': 'Basico',
                'nombrePrimerTrabajo': null,
                'linkedin': 'https://linkedin/jorgefrias',
                'esEmpleado': false,
                'modulo': 'Introduccion a la programacion'
            },
            {
                'nombreCompleto': 'Edson Lopez',
                'nombreEstado': 'Egresade',
                'fechaNacimiento': '2003-04-07',
                'correo': 'edson.lopez@gcorreo.com',
                'celular': 7389483,
                'nombreNodo': 'CABA',
                'añoGraduacion': 2015,
                'cuatrimestre': 2,
                'nivelIngles': 'Avanzado',
                'nombrePrimerTrabajo': 'Tsoft',
                'linkedin': 'https://linkedin/clodomiro',
                'esEmpleado': false,
                'modulo': 'Introduccion a la programacion'
            },
            {
                'nombreCompleto': 'Ericka Viraca',
                'nombreEstado': 'Egresade',
                'fechaNacimiento': '1998-01-01',
                'correo': 'ericka.viraca@gcorreo.com',
                'celular': 79840586,
                'nombreNodo': 'CABA',
                'añoGraduacion': 2015,
                'cuatrimestre': 4,
                'nivelIngles': 'Avanzado',
                'nombrePrimerTrabajo': 'Tsoft',
                'linkedin': 'https://linkedin/erickaviraca',
                'esEmpleado': false,
                'modulo': 'Alfabetizacion digital'
            },
            {
                'nombreCompleto': 'Julian Rodriguez',
                'nombreEstado': 'Egresade',
                'fechaNacimiento': '2000-02-02',
                'correo': 'julian.rodriguez@gcorreo.com',
                'celular': 79888665,
                'nombreNodo': 'Santa Fe',
                'añoGraduacion': 2011,
                'cuatrimestre': 2,
                'nivelIngles': 'Intermedio',
                'nombrePrimerTrabajo': null,
                'linkedin': 'https://linkedin/julianrodriguez',
                'esEmpleado': false,
                'modulo': 'Alfabetizacion digital'
            },
            {
                'nombreCompleto': 'Harry Potter Mamani',
                'nombreEstado': 'Egresade',
                'fechaNacimiento': '1991-06-08',
                'correo': 'harry.mamani@gcorreo.com',
                'celular': 78677899,
                'nombreNodo': 'CABA',
                'añoGraduacion': 2009,
                'cuatrimestre': 3,
                'nivelIngles': 'Intermedio',
                'nombrePrimerTrabajo': null,
                'linkedin': 'https://linkedin/harrypotter',
                'esEmpleado': false,
                'modulo': 'Alfabetizacion digital'
            },
            {
                'nombreCompleto': 'Henry Quispe de la Mamani',
                'nombreEstado': 'Egresade',
                'fechaNacimiento': '1990-01-08',
                'correo': 'henry.quispe@gcorreo.com',
                'celular': 794847859,
                'nombreNodo': 'Santa Fe',
                'añoGraduacion': 2010,
                'cuatrimestre': 3,
                'nivelIngles': 'Avanzado',
                'nombrePrimerTrabajo': null,
                'linkedin': 'https://linkedin/henrymamani',
                'esEmpleado': false,
                'modulo': 'Testing funcional'
            },
            {
                'nombreCompleto': 'Dante Bradshaw',
                'nombreEstado': 'Estudiante',
                'fechaNacimiento': '1989-03-14',
                'correo': 'ultricies@mauris.org',
                'celular': 16233293,
                'nombreNodo': 'Santa Fe',
                'añoGraduacion': null,
                'cuatrimestre': 1,
                'nivelIngles': 'Basico',
                'nombrePrimerTrabajo': null,
                'linkedin': 'https://linkedin/dantebradshaw',
                'esEmpleado': false,
                'modulo': 'Testing Automation'
            },
            {
                'nombreCompleto': 'Harlan Ferguson',
                'nombreEstado': 'Estudiante',
                'fechaNacimiento': '1995-07-11',
                'correo': 'volutpat@nonluctus.edu',
                'celular': 20261429,
                'nombreNodo': 'Santa Fe',
                'añoGraduacion': null,
                'cuatrimestre': 1,
                'nivelIngles': 'Avanzado',
                'nombrePrimerTrabajo': null,
                'linkedin': 'https://linkedin/harlanferguson',
                'esEmpleado': false,
                'modulo': 'Testing Automation'
            },
            {
                'nombreCompleto': 'Brennan Goff',
                'nombreEstado': 'Estudiante',
                'fechaNacimiento': '1985-04-07',
                'correo': 'goff.brennan@gcorreo.com',
                'celular': 60794806,
                'nombreNodo': 'CABA',
                'añoGraduacion': null,
                'cuatrimestre': 3,
                'nivelIngles': 'Basico',
                'nombrePrimerTrabajo': null,
                'linkedin': 'https://linkedin/goffbrennan',
                'esEmpleado': false,
                'modulo': 'Testing Automation'
            },
            {
                'nombreCompleto': 'Ori Griffith',
                'nombreEstado': 'Estudiante',
                'fechaNacimiento': '1995-05-05',
                'correo': 'orig1995@gcorreo.com',
                'celular': 77482948,
                'nombreNodo': 'Itzunguo',
                'añoGraduacion': null,
                'cuatrimestre': 3,
                'nivelIngles': 'Avanzado',
                'nombrePrimerTrabajo': null,
                'linkedin': 'https://linkedin/origriffith',
                'esEmpleado': false,
                'modulo': 'Introduccion a la programacion'
            },
            {
                'nombreCompleto': 'Ann Britt',
                'nombreEstado': 'Estudiante',
                'fechaNacimiento': '1990-01-01',
                'correo': 'annbritt@gcorreo.com',
                'celular': 7787452,
                'nombreNodo': 'CABA',
                'añoGraduacion': null,
                'cuatrimestre': 2,
                'nivelIngles': 'Intermedio',
                'nombrePrimerTrabajo': null,
                'linkedin': 'https://linkedin/annbritt',
                'esEmpleado': false,
                'modulo': 'Introduccion a la programacion'
            },
            {
                'nombreCompleto': 'John Smith',
                'nombreEstado': 'Estudiante',
                'fechaNacimiento': '1998-09-17',
                'correo': 'johnhsmith@gcorreo.com',
                'celular': 78564898,
                'nombreNodo': 'CABA',
                'añoGraduacion': null,
                'cuatrimestre': 3,
                'nivelIngles': 'Avanzado',
                'nombrePrimerTrabajo': null,
                'linkedin': 'https://linkedin/johnhsmith',
                'esEmpleado': false,
                'modulo': 'Introduccion a la programacion'
            },
            {
                'nombreCompleto': 'Matthew Watkins',
                'nombreEstado': 'Estudiante',
                'fechaNacimiento': '1985-01-30',
                'correo': 'watkinator@gcorreo.com',
                'celular': 7389483,
                'nombreNodo': 'CABA',
                'añoGraduacion': null,
                'cuatrimestre': 2,
                'nivelIngles': 'Avanzado',
                'nombrePrimerTrabajo': null,
                'linkedin': 'https://linkedin/mattwatkins',
                'esEmpleado': false,
                'modulo': 'Introduccion a la programacion'
            },
            {
                'nombreCompleto': 'Jeanette Lawrence',
                'nombreEstado': 'Estudiante',
                'fechaNacimiento': '1991-09-27',
                'correo': 'jeanlawrence91@gcorreo.com',
                'celular': 22651768,
                'nombreNodo': 'CABA',
                'añoGraduacion': null,
                'cuatrimestre': 4,
                'nivelIngles': 'Avanzado',
                'nombrePrimerTrabajo': null,
                'linkedin': 'https://linkedin/jeanlawrence',
                'esEmpleado': false,
                'modulo': 'Alfabetizacion digital'
            },
            {
                'nombreCompleto': 'Elizabeth Mclean',
                'nombreEstado': 'Estudiante',
                'fechaNacimiento': '1990-03-25',
                'correo': 'lizzymclean@gcorreo.com',
                'celular': 60115138,
                'nombreNodo': 'Santa Fe',
                'añoGraduacion': null,
                'cuatrimestre': 2,
                'nivelIngles': 'Intermedio',
                'nombrePrimerTrabajo': null,
                'linkedin': 'https://linkedin/elizabethmclean',
                'esEmpleado': false,
                'modulo': 'Alfabetizacion digital'
            },
            {
                'nombreCompleto': 'Tobias Sanchez',
                'nombreEstado': 'Egresade',
                'fechaNacimiento': '1984-10-31',
                'correo': 'santoviez@gcorreo.com',
                'celular': 61422284,
                'nombreNodo': 'CABA',
                'añoGraduacion': 2009,
                'cuatrimestre': 3,
                'nivelIngles': 'Intermedio',
                'nombrePrimerTrabajo': 'Java Wallys',
                'linkedin': 'https://linkedin/tobysanchez',
                'esEmpleado': true,
                'modulo': 'Alfabetizacion digital'
            },
            {
                'nombreCompleto': 'Robert Tougas',
                'nombreEstado': 'Egresade',
                'fechaNacimiento': '1988-09-17',
                'correo': 'eltoug@gcorreo.com',
                'celular': 28084949,
                'nombreNodo': 'Santa Fe',
                'añoGraduacion': 2011,
                'cuatrimestre': 7,
                'nivelIngles': 'Avanzado',
                'nombrePrimerTrabajo': 'GE Tech',
                'linkedin': 'https://linkedin/robtougas',
                'esEmpleado': true,
                'modulo': 'Testing Automation'
            },
            {
                'nombreCompleto': 'Dominique Harrison',
                'nombreEstado': 'Egresade',
                'fechaNacimiento': '1985-01-30',
                'correo': 'dominih@hotcorreo.com',
                'celular': 39367092,
                'nombreNodo': 'Santa Fe',
                'añoGraduacion': 2008,
                'cuatrimestre': 1,
                'nivelIngles': 'Avanzado',
                'nombrePrimerTrabajo': 'Jsoft',
                'linkedin': 'https://linkedin/dominiqueharrison',
                'esEmpleado': true,
                'modulo': 'Testing Automation'
            },
            {
                'nombreCompleto': 'Uta Sanford',
                'nombreEstado': 'Egresade',
                'fechaNacimiento': '1996-07-31',
                'correo': 'utan1123@gcorreo.com',
                'celular': 19816256,
                'nombreNodo': 'Santa Fe',
                'añoGraduacion': 2017,
                'cuatrimestre': 3,
                'nivelIngles': 'Basico',
                'nombrePrimerTrabajo': 'HalSoft',
                'linkedin': 'https://linkedin/utasanford',
                'esEmpleado': true,
                'modulo': 'Testing Automation'
            },
            {
                'nombreCompleto': 'Lael Cochran',
                'nombreEstado': 'Egresade',
                'fechaNacimiento': '1988-04-20',
                'correo': 'lcochran@outlook.com',
                'celular': 46031108,
                'nombreNodo': 'Santa Fe',
                'añoGraduacion': 2010,
                'cuatrimestre': 3,
                'nivelIngles': 'Avanzado',
                'nombrePrimerTrabajo': 'ctrlaltdel',
                'linkedin': 'https://linkedin/cochranlael',
                'esEmpleado': true,
                'modulo': 'Introduccion a la programacion'
            },
            {
                'nombreCompleto': 'Anastasia Phelps',
                'nombreEstado': 'Egresade',
                'fechaNacimiento': '1990-10-11',
                'correo': 'anniephelps90@gcorreo.com',
                'celular': 90232469,
                'nombreNodo': 'CABA',
                'añoGraduacion': 2009,
                'cuatrimestre': 2,
                'nivelIngles': 'Intermedio',
                'nombrePrimerTrabajo': 'Jsoft',
                'linkedin': 'https://linkedin/anniephelps',
                'esEmpleado': true,
                'modulo': 'Introduccion a la programacion'
            },
            {
                'nombreCompleto': 'Finn Camacho',
                'nombreEstado': 'Egresade',
                'fechaNacimiento': '1984-10-23',
                'correo': 'finnster@gcorreo.com',
                'celular': 41288630,
                'nombreNodo': 'CABA',
                'añoGraduacion': 2009,
                'cuatrimestre': 3,
                'nivelIngles': 'Basico',
                'nombrePrimerTrabajo': null,
                'linkedin': 'https://linkedin/finncamacho',
                'esEmpleado': false,
                'modulo': 'Introduccion a la programacion'
            },
            {
                'nombreCompleto': 'Jayme Suarez',
                'nombreEstado': 'Egresade',
                'fechaNacimiento': '1989-07-21',
                'correo': 'jaysuarez@live.com',
                'celular': 71856887,
                'nombreNodo': 'Itzunguo',
                'añoGraduacion': 2015,
                'cuatrimestre': 2,
                'nivelIngles': 'Avanzado',
                'nombrePrimerTrabajo': null,
                'linkedin': 'https://linkedin/jaymesuarez',
                'esEmpleado': false,
                'modulo': 'Introduccion a la programacion'
            },
            {
                'nombreCompleto': 'Ralph Young',
                'nombreEstado': 'Egresade',
                'fechaNacimiento': '1994-07-25',
                'correo': 'youngterralph@gcorreo.com',
                'celular': 61067222,
                'nombreNodo': 'CABA',
                'añoGraduacion': 2015,
                'cuatrimestre': 4,
                'nivelIngles': 'Avanzado',
                'nombrePrimerTrabajo': null,
                'linkedin': 'https://linkedin/ralphyoung',
                'esEmpleado': false,
                'modulo': 'Alfabetizacion digital'
            },
            {
                'nombreCompleto': 'Laura Knapp',
                'nombreEstado': 'Egresade',
                'fechaNacimiento': '1988-03-12',
                'correo': 'lauknapp@gcorreo.com',
                'celular': 75433544,
                'nombreNodo': 'Santa Fe',
                'añoGraduacion': 2011,
                'cuatrimestre': 2,
                'nivelIngles': 'Intermedio',
                'nombrePrimerTrabajo': null,
                'linkedin': 'https://linkedin/lauraknapp',
                'esEmpleado': false,
                'modulo': 'Alfabetizacion digital'
            },
            {
                'nombreCompleto': 'Hiram Wilder',
                'nombreEstado': 'Egresade',
                'fechaNacimiento': '1989-06-02',
                'correo': 'wiramhilder@gcorreo.com',
                'celular': 62871255,
                'nombreNodo': 'CABA',
                'añoGraduacion': 2009,
                'cuatrimestre': 3,
                'nivelIngles': 'Intermedio',
                'nombrePrimerTrabajo': null,
                'linkedin': 'https://linkedin/hiramwilder',
                'esEmpleado': false,
                'modulo': 'Alfabetizacion digital'
            },
        ]);
    },

    down: async(queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Estudiantes', null, {});
    }
};