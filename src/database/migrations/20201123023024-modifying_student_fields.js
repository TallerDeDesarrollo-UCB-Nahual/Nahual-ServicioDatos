'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
        'Estudiantes', // table name
        'apellido', // new field name
        {
          type: Sequelize.STRING,
          allowNull: true,
        },
      ),
      queryInterface.addColumn(
        'Estudiantes', // table name
        'nombre', // new field name
        {
          type: Sequelize.STRING,
          allowNull: true,
        },
      ),
      queryInterface.removeColumn('Estudiantes', 'nombreCompleto'),
    ])

  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
        'Estudiantes', // table name
        'nombreCompleto', // new field name
        {
          type: Sequelize.STRING,
          allowNull: true,
        },
      ),
      queryInterface.removeColumn('Estudiantes', 'nombre'),
      queryInterface.removeColumn('Estudiantes', 'apellido'),
    ]);
  }
};
