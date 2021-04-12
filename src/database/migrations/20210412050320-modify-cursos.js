'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
        'Cursos', // table name
        'anio', // new field name
        {
            type: Sequelize.INTEGER,
            allowNull: true,
        },
      ),
      queryInterface.addColumn(
        'Cursos', // table name
        'periodo', // new field name
        {
            type: Sequelize.STRING,
            allowNull: true,
        },
      ),
      queryInterface.addColumn(
        'Cursos', // table name
        'estado', // new field name
        {
            type: Sequelize.BOOLEAN,
            allowNull: true,
        },
      ),
      queryInterface.addColumn(
        'Cursos', // table name
        'TopicoId', // new field name
        {
            type: Sequelize.INTEGER,
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
