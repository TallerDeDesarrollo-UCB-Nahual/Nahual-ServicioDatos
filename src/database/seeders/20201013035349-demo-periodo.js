'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Periodos', [{
                anio: 1998,
                periodo: 'C2',
                topicoId: 1,
                estado: true
            },
            {
                anio: 1999,
                periodo: 'C3',
                topicoId: 1,
                estado: false
            }
        ]);
    },

    down: async(queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Periodos', null, {});
    }
};