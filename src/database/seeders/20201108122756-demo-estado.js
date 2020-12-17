'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Estados', [{
                nombre: 'Pre-inscripte',
            },
            {
                nombre: 'Alumne',
            },
            {
                nombre: 'Egresade',
            },
            {
                nombre: 'Empleade',
            },
            {
                nombre: 'Abandonade',
            }
        ]);
    },

    down: async(queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Estados', null, {});
    }
};