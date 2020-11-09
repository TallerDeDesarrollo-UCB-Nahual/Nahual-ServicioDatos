'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Sedes', [{
                nombre: 'Intive',
                NodoId: 1
            },
            {
                nombre: 'Ituzaingó',
                NodoId: 4
            },
            {
                nombre: 'Kleer',
                NodoId: 1
            },
            {
                nombre: 'Technisis',
                NodoId: 1
            },
            {
                nombre: 'Contra viento y marea',
                NodoId: 3
            },
            {
                nombre: 'Rosario',
                NodoId: 1
            },
            {
                nombre: 'Máximo Paz',
                NodoId: 1
            },
            {
                nombre: 'Tierra Violeta',
                NodoId: 1
            },
        ]);
    },

    down: async(queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Sedes', null, {});
    }
};