'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Cursos', [{
                horario: '10:00 - 15:00',
                profesores: 'Hector Hidalgo',
                notas: 'Es basico',
                PeriodoId: 1,
                NodoId: 1,
                SedeId: 1
            },
            {
                horario: '12:00 - 15:00',
                profesores: 'Hector Hidalgo',
                notas: 'Es dificil',
                PeriodoId: 2,
                NodoId: 1,
                SedeId: 1
            }
        ]);
    },

    down: async(queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Cursos', null, {});
    }
};