'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('Outputs', [{
      InteractuableId: 2,
      ActionId: 1,
      output: "giving to poster",
      createdAt: new Date(),
			updatedAt: new Date(),
     },
     {
      InteractuableId: 2,
      ActionId: 2,
      output: "it doesn't fit in my pockets",
      createdAt: new Date(),
			updatedAt: new Date(),
     },
     {
      InteractuableId: 2,
      ActionId: 3,
      output: "I feel the right way of using it is actually LOOKING at it.",
      createdAt: new Date(),
			updatedAt: new Date(),
     },
     {
      InteractuableId: 2,
      ActionId: 4,
      output: "can't be opened",
      createdAt: new Date(),
			updatedAt: new Date(),
     },
     {
      InteractuableId: 2,
      ActionId: 5,
      output: "lookat_poster",
      createdAt: new Date(),
			updatedAt: new Date(),
     },
     {
      InteractuableId: 2,
      ActionId: 6,
      output: "let's not get carried away...",
      createdAt: new Date(),
			updatedAt: new Date(),
     },
     {
      InteractuableId: 2,
      ActionId: 7,
      output: "You really make no sense.",
      createdAt: new Date(),
			updatedAt: new Date(),
     },
     {
      InteractuableId: 2,
      ActionId: 8,
      output: "hi, poster!",
      createdAt: new Date(),
			updatedAt: new Date(),
     },
     {
      InteractuableId: 2,
      ActionId: 9,
      output: "no time for this.",
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
