'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Topicos', 
        [
            {
                nombre: 'Testing Funcional',
            },
            {
                nombre: 'Testing Automation',
            },
            {
                nombre: 'Introducción a la programación',
            },
            {
                nombre: 'Alfabetización digital',
            },
        ]);
    },

    down: async(queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Topicos', null, {});
    }
};