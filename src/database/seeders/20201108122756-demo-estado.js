'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Estados', [{
                nombre: 'Pre-inscripte',
            },
            {
                nombre: 'Inscripte',
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
            },
            {
                nombre: 'Tester',
            }
        ]);
    },

    down: async(queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Estados', null, {});
    }
};