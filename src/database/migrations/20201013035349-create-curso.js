'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.createTable('Cursos', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            nodo: {
                type: Sequelize.STRING,
                allowNull: false
            },
            horarioInicio: {
                type: Sequelize.TIME,
                allowNull: true
            },
            horarioFin: {
                type: Sequelize.TIME,
                allowNull: true
            },
            profesores: {
                type: Sequelize.STRING,
                allowNull: true
            },
            notas: {
                type: Sequelize.STRING,
                allowNull: true
            },
            PeriodoId: {
                type: Sequelize.INTEGER,
                allowNull: false
            }
        })
    },

    down: async(queryInterface, Sequelize) => {
        return queryInterface.dropTable('Cursos');
    }
};