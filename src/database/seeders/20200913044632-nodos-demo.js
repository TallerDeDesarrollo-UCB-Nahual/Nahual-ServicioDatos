'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Nodos', [{
                nombre: 'CABA',
                SedeId: 1,
            },
            {
                nombre: 'Santa Fe',
                SedeId: 1,
            },
            {
                nombre: 'Banfield',
                SedeId: 2,
            },
            {
                nombre: 'Itzunguo',
                SedeId: 2,
            }
        ]);
    },

    down: async(queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Nodos', null, {});
    }
};