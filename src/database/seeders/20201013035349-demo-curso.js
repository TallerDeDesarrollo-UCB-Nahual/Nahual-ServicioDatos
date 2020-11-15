'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Cursos', [{
                horarioInicio: '10:00:00',
                horarioFin: '15:00:00',
                profesores: 'Hector Hidalgo',
                notas: 'Es basico',
                PeriodoId: 1,
                NodoId: 1,
                SedeId: 1
            },
            {
                horarioInicio: '12:00:00',
                horarioFin: '15:00:00',
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