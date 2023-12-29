'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('Outputs', [{
      InteractuableId: 1,
      ActionId: 1,
      output: 'giving to interactuable',
      createdAt: new Date(),
			updatedAt: new Date(),
     },
     {
      InteractuableId: 1,
      ActionId: 2,
      output: 'picking up interactuable',
      createdAt: new Date(),
			updatedAt: new Date(),
     },
     {
      InteractuableId: 1,
      ActionId: 3,
      output: 'using interactuable',
      createdAt: new Date(),
			updatedAt: new Date(),
     },
     {
      InteractuableId: 1,
      ActionId: 4,
      output: 'opening interactuable',
      createdAt: new Date(),
			updatedAt: new Date(),
     },
     {
      InteractuableId: 1,
      ActionId: 5,
      output: 'looking at interactuable',
      createdAt: new Date(),
			updatedAt: new Date(),
     },
     {
      InteractuableId: 1,
      ActionId: 6,
      output: 'pushing interactuable',
      createdAt: new Date(),
			updatedAt: new Date(),
     },
     {
      InteractuableId: 1,
      ActionId: 7,
      output: 'closing interactuable',
      createdAt: new Date(),
			updatedAt: new Date(),
     },
     {
      InteractuableId: 1,
      ActionId: 8,
      output: 'talking to interactuable',
      createdAt: new Date(),
			updatedAt: new Date(),
     },
     {
      InteractuableId: 1,
      ActionId: 9,
      output: 'pulling interactuable',
      createdAt: new Date(),
			updatedAt: new Date(),
     },
    ], {});

    
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
