'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Cursos', [{
                horario: '10:00 - 15:00',
                profesores: 'Pepe Perez',
                estado: true,
                periodo: 1,
                anio: 2021,
                TopicoId: 2,
                notas: 'Es basico',
                NodoId: 1,
                SedeId: 1
            },
            {
                horario: '12:00 - 15:00',
                profesores: 'Juan Gabriel',
                notas: 'Es dificil',
                estado: false,
                periodo: 1,
                anio: 2020,
                TopicoId: 1,
                NodoId: 1,
                SedeId: 1
            }
        ]);
    },

    down: async(queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Cursos', null, {});
    }
};