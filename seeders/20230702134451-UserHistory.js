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
      'UserBiodata', 
      [
        {
          userGameId: '1',
          fullname: 'su',
          city: 'Jakarta',
          birthday: '1999-02-02',
          gender: 'Male',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userGameId: '2',
          fullname: 'user',
          city: 'Jakarta',
          birthday: '1999-02-02',
          gender: 'Male',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userGameId: '3',
          fullname: 'shendy',
          city: 'Jakarta',
          birthday: '1999-02-02',
          gender: 'Male',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userGameId: '4',
          fullname: 'Alan',
          city: 'Sydney',
          birthday: '1987-02-02',
          gender: 'Male',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userGameId: '5',
          fullname: 'Elan',
          city: 'Yogyakarta',
          birthday: '2004-02-02',
          gender: 'Female',
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

    await queryInterface.bulkDelete('UserBiodata', null, {});
  }
};
