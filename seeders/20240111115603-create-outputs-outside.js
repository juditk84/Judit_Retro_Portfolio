'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('Outputs', [{
      InteractuableId: 7,
      ActionId: 1,
      output: "Yes! Go outside! Give it all!!",
      createdAt: new Date(),
			updatedAt: new Date(),
     },
     {
      InteractuableId: 7,
      ActionId: 2,
      output: "This is materially impossible or, at least, difficult.",
      createdAt: new Date(),
			updatedAt: new Date(),
     },
     {
      InteractuableId: 7,
      ActionId: 3,
      output: "I'm worried about you.",
      createdAt: new Date(),
			updatedAt: new Date(),
     },
     {
      InteractuableId: 7,
      ActionId: 4,
      output: "Yes! Go outside! Open their eyes!!",
      createdAt: new Date(),
			updatedAt: new Date(),
     },
     {
      InteractuableId: 7,
      ActionId: 5,
      output: "The sheltering crimson skies.",
      createdAt: new Date(),
			updatedAt: new Date(),
     },
     {
      InteractuableId: 7,
      ActionId: 6,
      output: "I'm lost here. Push the window? Push the world outside?",
      createdAt: new Date(),
			updatedAt: new Date(),
     },
     {
      InteractuableId: 7,
      ActionId: 7,
      output: "Let's not get too dark, but the world is closed enough...",
      createdAt: new Date(),
			updatedAt: new Date(),
     },
     {
      InteractuableId: 7,
      ActionId: 8,
      output: "Hi, world outside!",
      createdAt: new Date(),
			updatedAt: new Date(),
     },
     {
      InteractuableId: 7,
      ActionId: 9,
      output: "You suggest interesting and yet impossible things.",
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
