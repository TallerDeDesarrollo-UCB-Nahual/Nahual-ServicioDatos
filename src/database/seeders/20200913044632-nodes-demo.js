'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Node', [
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
        return queryInterface.bulkDelete('Node', null, {});
    }
};
