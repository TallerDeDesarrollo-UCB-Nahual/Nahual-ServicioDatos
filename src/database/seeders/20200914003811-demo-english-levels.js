'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('EnglishLevels', [
      {
        name: 'Basico',
      },
      {
        name: 'Intermedio',
      },
      {
        name: 'Avanzado',
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('EnglishLevels', null, {});
  }
};
