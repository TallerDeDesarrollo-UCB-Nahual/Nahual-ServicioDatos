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
            dni: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            nombreCompleto: {
                type: Sequelize.STRING,
                allowNull: false
            },
            nacionalidad: {
                type: Sequelize.STRING,
                allowNull: true
            },
            localidad: {
                type: Sequelize.STRING,
                allowNull: true
            },
            trabajaActualmente: {
                type: Sequelize.BOOLEAN,
                defaultValue: false,
            },
            lugarDeTrabajo: {
                type: Sequelize.STRING,
                allowNull: true
            },
            trabajaSistemas: {
                type: Sequelize.BOOLEAN,
                defaultValue: false,
            },
            experienciaSistemas: {
                type: Sequelize.STRING,
                allowNull: true
            },
            estudiosSistemas: {
                type: Sequelize.STRING,
                allowNull: true
            },
            estadoId: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            fechaNacimiento: {
                type: Sequelize.DATE,
                allowNull: true,
            },
            correo: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            celular: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            sedeId: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            nodoId: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            añoGraduacion: {
                type: Sequelize.INTEGER,
                allowNull: true
            },
            cuatrimestre: {
                type: Sequelize.INTEGER,
                allowNull: true
            },
            nivelInglesId: {
                type: Sequelize.INTEGER,
                allowNull: true,
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
                defaultValue: false,
            },
            modulo: {
                type: Sequelize.STRING,
                allowNull: true
            },
            zona: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            detalle: {
                type: Sequelize.STRING,
                allowNull: true,
            }
        })
    },

    down: async(queryInterface, Sequelize) => {
        return queryInterface.dropTable('Estudiantes');
    }
};