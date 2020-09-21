'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Students', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      fullName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      statusName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      birthDate: {
        type: Sequelize.DATE,
        allowNull: true
      },
      mail: {
        type: Sequelize.STRING,
        allowNull: true
      },
      cellphone: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      nodeName: {
        type: Sequelize.STRING,
        allowNull: true
      },
      graduationYear: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      quarter: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      englishLevel: {
        type: Sequelize.STRING,
        allowNull: true
      },
      firstJobName: {
        type: Sequelize.STRING,
        allowNull: true
      },
      linkedin: {
        type: Sequelize.STRING,
        allowNull: true
      },
      isEmployed: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      module: {
        type: Sequelize.STRING,
        allowNull: true
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Students');
  }
};
