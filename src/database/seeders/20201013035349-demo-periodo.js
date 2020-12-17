'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Periodos', [{
                anio: 1998,
                periodo: 'C2',
                TopicoId: 1,
                estado: true,
                mensajeDeCierre: 'Bienvenido al periodo C2'
            },
            {
                anio: 1999,
                periodo: 'C3',
                TopicoId: 1,
                estado: false,
                mensajeDeCierre: 'Bienvenido al periodo C3'
            }
        ]);
    },

    down: async(queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Periodos', null, {});
    }
};