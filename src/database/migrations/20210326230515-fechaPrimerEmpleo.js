'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
          'Estudiantes', // table name
          'fechaPrimerEmpleo', // new field name
          {
              type: Sequelize.DATE,
              allowNull: true,
          },
      )
  ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
