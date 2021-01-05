'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Users', 
   [
      {
        firstName: 'Aldi',
        lastName: 'Nugroho',
        email: 'aldiinug@gmail.com',
        password: 'abcdEF',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Fikri',
        lastName: 'Sofyan',
        email: 'kiki@gmail.com',
        password: 'abasd12F',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Muhammad',
        lastName: 'Imam',
        email: 'imam@gmail.com',
        password: 'abcd000EF',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return await queryInterface.bulkDelete('Users', null, {});
  }
};
