'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Sedes', [{
                nombre: 'Buenos Aires'
            },
            {
                nombre: 'La Plata'
            }
        ]);
    },

    down: async(queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Sedes', null, {});
    }
};