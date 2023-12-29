'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('Outputs', [{
      InteractuableId: 1,
      ActionId: 1,
      output: "give what exactly?",
      createdAt: new Date(),
			updatedAt: new Date(),
     },
     {
      InteractuableId: 1,
      ActionId: 2,
      output: "it doesn't fit in my pockets ",
      createdAt: new Date(),
			updatedAt: new Date(),
     },
     {
      InteractuableId: 1,
      ActionId: 3,
      output: "no time to sit!",
      createdAt: new Date(),
			updatedAt: new Date(),
     },
     {
      InteractuableId: 1,
      ActionId: 4,
      output: "can't be opened",
      createdAt: new Date(),
			updatedAt: new Date(),
     },
     {
      InteractuableId: 1,
      ActionId: 5,
      output: "a decent chair a person can actually sit on.",
      createdAt: new Date(),
			updatedAt: new Date(),
     },
     {
      InteractuableId: 1,
      ActionId: 6,
      output: "let's not get carried away...",
      createdAt: new Date(),
			updatedAt: new Date(),
     },
     {
      InteractuableId: 1,
      ActionId: 7,
      output: "You really make no sense.",
      createdAt: new Date(),
			updatedAt: new Date(),
     },
     {
      InteractuableId: 1,
      ActionId: 8,
      output: "hi, chair!",
      createdAt: new Date(),
			updatedAt: new Date(),
     },
     {
      InteractuableId: 1,
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
