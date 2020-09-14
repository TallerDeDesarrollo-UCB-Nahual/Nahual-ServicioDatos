'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Students', [
      {
        'fullName': 'clodomiro saavedra perez',
        'statusName': 'Egresade',
        'birthDate': '1995-02-02',
        'mail': 'clodo.saavedra@gmail.com',
        'cellphone': 79840584,
        'nodeName': 'CABA',
        'graduationYear': 2019,
        'quarter': 1,
        'englishLevel': 'Basico',
        'firstJobName': 'Tsoft',
        'linkedin': 'https://linkedin/clodomiro',
        'isEmployed': false,
        'module': 'Testing funcional'
      },
      {
        'fullName': 'Diego Figueroa',
        'statusName': 'Egresade',
        'birthDate': '1992-02-01',
        'mail': 'diego.figueroa@gmail.com',
        'cellphone': 79340514,
        'nodeName': 'CABA',
        'graduationYear': 2020,
        'quarter': 2,
        'englishLevel': 'Intermedio',
        'firstJobName': 'Jamcity',
        'linkedin': 'https://linkedin/diegofigueroa',
        'isEmployed': false,
        'module': 'Testing funcional'
      },
      {
        'fullName': 'Guillermo Posebon',
        'statusName': 'Estudiante',
        'birthDate': '1998-07-02',
        'mail': 'guillermo.posebon@gmail.com',
        'cellphone': 798580584,
        'nodeName': 'CABA',
        'graduationYear': 2017,
        'quarter': 3,
        'englishLevel': 'Basico',
        'firstJobName': null,
        'linkedin': 'https://linkedin/guillermoposebon',
        'isEmployed': false,
        'module': 'Testing funcional'
      },
      {
        'fullName': 'Gustavo Roca',
        'statusName': 'Egresade',
        'birthDate': '1985-01-02',
        'mail': 'gustavo.roca@gmail.com',
        'cellphone': 77840584,
        'nodeName': 'Santa fe',
        'graduationYear': 2010,
        'quarter': 1,
        'englishLevel': 'Avanzado',
        'firstJobName': null,
        'linkedin': 'https://linkedin/gustavoroca',
        'isEmployed': false,
        'module': 'Testing funcional'
      },
      {
        'fullName': 'Adrian Torrez',
        'statusName': 'Egresade',
        'birthDate': '1990-02-02',
        'mail': 'clodo.saavedra@gmail.com',
        'cellphone': 71140584,
        'nodeName': 'Banfield',
        'graduationYear': 2010,
        'quarter': 2,
        'englishLevel': 'Intermedio',
        'firstJobName': null,
        'linkedin': 'https://linkedin/adriantorrez',
        'isEmployed': false,
        'module': 'Testing funcional'
      },
      {
        'fullName': 'Matias Centeno',
        'statusName': 'Estudiante',
        'birthDate': '1990-02-02',
        'mail': 'matias.centeno@gmail.com',
        'cellphone': 79880584,
        'nodeName': 'CABA',
        'graduationYear': null,
        'quarter': 1,
        'englishLevel': 'Basico',
        'firstJobName': null,
        'linkedin': 'https://linkedin/matiascenteno',
        'isEmployed': false,
        'module': 'Testing funcional'
      },
      {
        'fullName': 'Nicolas Cardozo',
        'statusName': 'Egresade',
        'birthDate': '1995-10-10',
        'mail': 'nicolas.cardozo@gmail.com',
        'cellphone': 73330584,
        'nodeName': 'Santa fe',
        'graduationYear': 2000,
        'quarter': 4,
        'englishLevel': 'Avanzado',
        'firstJobName': 'Tsoft',
        'linkedin': 'https://linkedin/nicocardozo',
        'isEmployed': false,
        'module': 'Testing funcional'
      },
      {
        'fullName': 'Micaela Nunez',
        'statusName': 'Egresade',
        'birthDate': '1995-11-11',
        'mail': 'micanu@gmail.com',
        'cellphone': 79555584,
        'nodeName': 'Santa fe',
        'graduationYear': 2000,
        'quarter': 3,
        'englishLevel': 'Intermedio',
        'firstJobName': 'Tsoft',
        'linkedin': 'https://linkedin/micanu',
        'isEmployed': false,
        'module': 'Testing funcional'
      },
      {
        'fullName': 'Maria callete',
        'statusName': 'Egresade',
        'birthDate': '2001-02-02',
        'mail': 'mariacalle@gmail.com',
        'cellphone': 73947393,
        'nodeName': 'Ituzaingo',
        'graduationYear': 2020,
        'quarter': 1,
        'englishLevel': 'Intermedio',
        'firstJobName': 'Tsoft',
        'linkedin': 'https://linkedin/mariacalle',
        'isEmployed': false,
        'module': 'Testing funcional'
      },
      {
        'fullName': 'Florencia Bosch',
        'statusName': 'Egresade',
        'birthDate': '1990-01-01',
        'mail': 'florencia.bosch@gmail.com',
        'cellphone': 6374857,
        'nodeName': 'Ituzaingo',
        'graduationYear': 2020,
        'quarter': 3,
        'englishLevel': 'Basico',
        'firstJobName': 'Tsoft',
        'linkedin': 'https://linkedin/florenciabosch',
        'isEmployed': false,
        'module': 'Testing Automation'
      },
      {
        'fullName': 'Alejandra Zamudio',
        'statusName': 'Egresade',
        'birthDate': '1975-11-02',
        'mail': 'ale.zamudio@gmail.com',
        'cellphone': 7788782,
        'nodeName': 'CABA',
        'graduationYear': 2013,
        'quarter': 3,
        'englishLevel': 'Intermedio',
        'firstJobName': 'Tsoft',
        'linkedin': 'https://linkedin/alejandrazamudio',
        'isEmployed': false,
        'module': 'Testing Automation'
      },
      {
        'fullName': 'Daniel Banquito',
        'statusName': 'Egresade',
        'birthDate': '1991-01-01',
        'mail': 'daniel.banquito@gmail.com',
        'cellphone': 78665522,
        'nodeName': 'Santa fe',
        'graduationYear': 2001,
        'quarter': 7,
        'englishLevel': 'Basico',
        'firstJobName': null,
        'linkedin': 'https://linkedin/danielbanquito',
        'isEmployed': false,
        'module': 'Testing Automation'
      },
      {
        'fullName': 'Florimar Molina',
        'statusName': 'Egresade',
        'birthDate': '1994-12-10',
        'mail': 'florimolina@gmail.com',
        'cellphone': 74095744,
        'nodeName': 'Santa fe',
        'graduationYear': 2003,
        'quarter': 1,
        'englishLevel': 'Avanzado',
        'firstJobName': null,
        'linkedin': 'https://linkedin/florimolina',
        'isEmployed': false,
        'module': 'Testing Automation'
      },
      {
        'fullName': 'Gaston Humano',
        'statusName': 'Egresade',
        'birthDate': '1999-10-09',
        'mail': 'gaston.humano@gmail.com',
        'cellphone': 73834833,
        'nodeName': 'Santa fe',
        'graduationYear': 2002,
        'quarter': 3,
        'englishLevel': 'Basico',
        'firstJobName': 'Tsoft',
        'linkedin': 'https://linkedin/gastohumano',
        'isEmployed': false,
        'module': 'Testing Automation'
      },
      {
        'fullName': 'Michael Jackson',
        'statusName': 'Egresade',
        'birthDate': '1995-05-05',
        'mail': 'michael.jackso@gmail.com',
        'cellphone': 73938372,
        'nodeName': 'Santa fe',
        'graduationYear': 2006,
        'quarter': 3,
        'englishLevel': 'Avanzado',
        'firstJobName': null,
        'linkedin': 'https://linkedin/michaeljackson',
        'isEmployed': false,
        'module': 'Introduccion a la programacion'
      },
      {
        'fullName': 'Kenji Lozano',
        'statusName': 'Egresade',
        'birthDate': '1990-01-01',
        'mail': 'kenji.lozano@gmail.com',
        'cellphone': 7787452,
        'nodeName': 'CABA',
        'graduationYear': 2007,
        'quarter': 2,
        'englishLevel': 'Intermedio',
        'firstJobName': null,
        'linkedin': 'https://linkedin/kenjilozano',
        'isEmployed': false,
        'module': 'Introduccion a la programacion'
      },
      {
        'fullName': 'Jorge Frias',
        'statusName': 'Egresade',
        'birthDate': '2000-01-01',
        'mail': 'jorge.frias@gmail.com',
        'cellphone': 78564898,
        'nodeName': 'CABA',
        'graduationYear': 1999,
        'quarter': 3,
        'englishLevel': 'Basico',
        'firstJobName': null,
        'linkedin': 'https://linkedin/jorgefrias',
        'isEmployed': false,
        'module': 'Introduccion a la programacion'
      },
      {
        'fullName': 'Edson Lopez',
        'statusName': 'Egresade',
        'birthDate': '2003-04-07',
        'mail': 'edson.lopez@gmail.com',
        'cellphone': 7389483,
        'nodeName': 'CABA',
        'graduationYear': 2015,
        'quarter': 2,
        'englishLevel': 'Avanzado',
        'firstJobName': 'Tsoft',
        'linkedin': 'https://linkedin/clodomiro',
        'isEmployed': false,
        'module': 'Introduccion a la programacion'
      },
      {
        'fullName': 'Ericka Viraca',
        'statusName': 'Egresade',
        'birthDate': '1998-01-01',
        'mail': 'ericka.viraca@gmail.com',
        'cellphone': 79840586,
        'nodeName': 'CABA',
        'graduationYear': 2015,
        'quarter': 4,
        'englishLevel': 'Avanzado',
        'firstJobName': 'Tsoft',
        'linkedin': 'https://linkedin/erickaviraca',
        'isEmployed': false,
        'module': 'Alfabetizacion digital'
      },
      {
        'fullName': 'Julian Rodriguez',
        'statusName': 'Egresade',
        'birthDate': '2000-02-02',
        'mail': 'julian.rodriguez@gmail.com',
        'cellphone': 79888665,
        'nodeName': 'Santa fe',
        'graduationYear': 2011,
        'quarter': 2,
        'englishLevel': 'Intermedio',
        'firstJobName': null,
        'linkedin': 'https://linkedin/julianrodriguez',
        'isEmployed': false,
        'module': 'Alfabetizacion digital'
      },
      {
        'fullName': 'Harry Potter Mamani',
        'statusName': 'Egresade',
        'birthDate': '1991-06-08',
        'mail': 'harry.mamani@gmail.com',
        'cellphone': 78677899,
        'nodeName': 'CABA',
        'graduationYear': 2009,
        'quarter': 3,
        'englishLevel': 'Intermedio',
        'firstJobName': null,
        'linkedin': 'https://linkedin/harrypotter',
        'isEmployed': false,
        'module': 'Alfabetizacion digital'
      },
      {
        'fullName': 'Henry Quispe de la Mamani',
        'statusName': 'Egresade',
        'birthDate': '1990-01-08',
        'mail': 'henry.quispe@gmail.com',
        'cellphone': 794847859,
        'nodeName': 'Santa fe',
        'graduationYear': 2010,
        'quarter': 3,
        'englishLevel': 'Avanzado',
        'firstJobName': null,
        'linkedin': 'https://linkedin/henrymamani',
        'isEmployed': false,
        'module': 'Testing funcional'
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
return queryInterface.bulkDelete('Students', null, {});
  }
};
