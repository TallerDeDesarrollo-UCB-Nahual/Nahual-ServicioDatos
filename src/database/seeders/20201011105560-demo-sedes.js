'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Sedes', [{
                nombre: 'Buenos Aires',
                NodoId: 1
            },
            {
                nombre: 'La Plata',
                NodoId: 2
            },
            {
                nombre: 'Cordoba',
                NodoId: 2
            },
            {
                nombre: 'Quilmes',
                NodoId: 1
            }
        ]);
    },

    down: async(queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Sedes', null, {});
    }
};