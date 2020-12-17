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
            horario: {
                type: Sequelize.STRING,
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
            },
            NodoId: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            SedeId: {
                type: Sequelize.INTEGER,
                allowNull: false
            }
        })
    },

    down: async(queryInterface, Sequelize) => {
        return queryInterface.dropTable('Cursos');
    }
};