'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Periodos', [{
                anio: 1998,
                periodo: 'C2',
                topico: 'Testing Funcional',
                estado: true
            },
            {
                anio: 1999,
                periodo: 'C3',
                topico: 'Testing Funcional',
                estado: false
            }
        ]);
    },

    down: async(queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Periodos', null, {});
    }
};