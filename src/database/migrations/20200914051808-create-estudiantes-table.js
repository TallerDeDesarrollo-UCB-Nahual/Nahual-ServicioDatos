'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.createTable('Estudiantes', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            nombreCompleto: {
                type: Sequelize.STRING,
                allowNull: false
            },
            nombreEstado: {
                type: Sequelize.STRING,
                allowNull: false
            },
            fechaNacimiento: {
                type: Sequelize.DATE,
                allowNull: true
            },
            correo: {
                type: Sequelize.STRING,
                allowNull: true
            },
            celular: {
                type: Sequelize.INTEGER,
                allowNull: true
            },
            nombreNodo: {
                type: Sequelize.STRING,
                allowNull: true
            },
            añoGraduacion: {
                type: Sequelize.INTEGER,
                allowNull: true
            },
            cuatrimestre: {
                type: Sequelize.INTEGER,
                allowNull: true
            },
            nivelIngles: {
                type: Sequelize.STRING,
                allowNull: true
            },
            nombrePrimerTrabajo: {
                type: Sequelize.STRING,
                allowNull: true
            },
            linkedin: {
                type: Sequelize.STRING,
                allowNull: true
            },
            esEmpleado: {
                type: Sequelize.BOOLEAN,
                allowNull: false
            },
            modulo: {
                type: Sequelize.STRING,
                allowNull: true
            }
        })
    },

    down: async(queryInterface, Sequelize) => {
        return queryInterface.dropTable('Estudiantes');
    }
};