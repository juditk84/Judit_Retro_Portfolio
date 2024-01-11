'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('Outputs', [{
      InteractuableId: 3,
      ActionId: 1,
      output: "But give what exactly? Not a lead, this button is useless.",
      createdAt: new Date(),
			updatedAt: new Date(),
     },
     {
      InteractuableId: 3,
      ActionId: 2,
      output: "This is not Simon the Sorcerer, it doesn't fit in my pockets (or hat).",
      createdAt: new Date(),
			updatedAt: new Date(),
     },
     {
      InteractuableId: 3,
      ActionId: 3,
      output: "I feel the right way of using it is actually LOOKING at it.",
      createdAt: new Date(),
			updatedAt: new Date(),
     },
     {
      InteractuableId: 3,
      ActionId: 4,
      output: "You don't wanna do this to a CRT monitor!",
      createdAt: new Date(),
			updatedAt: new Date(),
     },
     {
      InteractuableId: 3,
      ActionId: 5,
      output: "lookat_screen",
      createdAt: new Date(),
			updatedAt: new Date(),
     },
     {
      InteractuableId: 3,
      ActionId: 6,
      output: "Hey these things are expensive.",
      createdAt: new Date(),
			updatedAt: new Date(),
     },
     {
      InteractuableId: 3,
      ActionId: 7,
      output: "If it was open, I could close it.",
      createdAt: new Date(),
			updatedAt: new Date(),
     },
     {
      InteractuableId: 3,
      ActionId: 8,
      output: "Hi, screen!",
      createdAt: new Date(),
			updatedAt: new Date(),
     },
     {
      InteractuableId: 3,
      ActionId: 9,
      output: "I'm not sure I understand what you mean here.",
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
