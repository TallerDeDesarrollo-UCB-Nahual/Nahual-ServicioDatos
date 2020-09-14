'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Students', [
      {
          FullName: 'Pedro Ramirez Torres',
          Birthday: '09/02/1996',
          Mail: 'pedro.ramirez@gmail.com',
          Phone: '79548266'
      },
  ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Students', null, {});
  }
};
