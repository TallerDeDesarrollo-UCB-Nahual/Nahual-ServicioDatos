'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Cursos', [{
                nodo: 'Caba-Kleer',
                horarioInicio: '10:00:00',
                horarioFin: '15:00:00',
                profesores: 'Hector Hidalgo',
                notas: 'Es basico',
                PeriodoId: 1
            },
            {
                nodo: 'Caba-Kleer',
                horarioInicio: '12:00:00',
                horarioFin: '15:00:00',
                profesores: 'Hector Hidalgo',
                notas: 'Es dificil',
                PeriodoId: 2
            }
        ]);
    },

    down: async(queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Cursos', null, {});
    }
};