'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
 
     await queryInterface.bulkInsert('Interactuables', [{
       name: 'chair',
       createdAt: new Date(),
			 updatedAt: new Date(),
     },
     {
      name: 'poster',
      createdAt: new Date(),
			updatedAt: new Date(),
    },
    {
      name: 'computer monitor',
      createdAt: new Date(),
			updatedAt: new Date(),
    },
    {
      name: 'computer',
      createdAt: new Date(),
			updatedAt: new Date(),
    }], {});
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
