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
      FullName: {
          type: Sequelize.STRING,
          allowNull: false
      },
      Birthday: {
          type: Sequelize.DATE,
          allowNull: false
      },
      Mail: {
          type: Sequelize.STRING,
          allowNull: false
      },
      Phone: {
          type: Sequelize.INTEGER,
          allowNull: false
      }
  })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Students');
  }
};
