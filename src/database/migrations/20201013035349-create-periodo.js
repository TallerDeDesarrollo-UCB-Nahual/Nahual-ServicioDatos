'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.createTable('Periodos', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            anio: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            periodo: {
                type: Sequelize.STRING,
                allowNull: false
            },
            topicoId: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            estado: {
                type: Sequelize.BOOLEAN,
                allowNull: false
            }
        })
    },

    down: async(queryInterface, Sequelize) => {
        return queryInterface.dropTable('Periodos');
    }
};