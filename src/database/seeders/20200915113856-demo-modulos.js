'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Modulos', [{
                nombre: 'Testing funcional',
            },
            {
                nombre: 'Testing Automation',
            },
            {
                nombre: 'Introduccion a la programacion',
            },
            {
                nombre: 'Alfabetizacion digital',
            }
        ]);
    },

    down: async(queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Modulos', null, {});
    }
};