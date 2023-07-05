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
      'UserHistories', 
      [
        {
          userGameId: '1',
          score: 'Win',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userGameId: '1',
          score: 'Win',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userGameId: '1',
          score: 'Lose',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userGameId: '2',
          score: 'Win',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userGameId: '2',
          score: 'Lose',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userGameId: '3',
          score: 'Lose',
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

    await queryInterface.bulkDelete('UserHistories', null, {});
  }
};
