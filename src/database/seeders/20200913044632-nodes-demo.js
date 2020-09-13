'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Nodes', [
            {
                name: 'CABA',
            },
            {
                name: 'Santa Fe',
            },
            {
                name: 'Banfield',
            },
            {
                name: 'Itzunguo',
            }
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Nodes', null, {});
    }
};
