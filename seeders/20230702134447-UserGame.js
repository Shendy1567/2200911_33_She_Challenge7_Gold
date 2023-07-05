'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    Example:
     await queryInterface.bulkInsert(
      'UserGames', 
      [
        {
          username: 'su',
          password: 'su',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: 'user',
          password: 'user',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: 'Shendy',
          password: 'shendy',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: 'Alan',
          password: 'Alan',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: 'Elan',
          password: 'Elan',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ], 
     {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('UserGames', null, {});
  }
};
