'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Modules', [
      {
          name: 'Testing funcional',
      },
      {
          name: 'Testing Automation',
      },
      {
          name: 'Introduccion a la programacion',
      },
      {
          name: 'Alfabetizacion digital',
      },
      {
          name: 'Testing para C++',
      }
  ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Modules', null, {});
  }
};
