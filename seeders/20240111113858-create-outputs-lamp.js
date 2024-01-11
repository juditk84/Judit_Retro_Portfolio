'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('Outputs', [{
      InteractuableId: 6,
      ActionId: 1,
      output: "Already gave all my love to that lamp.",
      createdAt: new Date(),
			updatedAt: new Date(),
     },
     {
      InteractuableId: 6,
      ActionId: 2,
      output: "That would mess the decoration, silly!",
      createdAt: new Date(),
			updatedAt: new Date(),
     },
     {
      InteractuableId: 6,
      ActionId: 3,
      output: "Have you tried USING the lightswitch instead?",
      createdAt: new Date(),
			updatedAt: new Date(),
     },
     {
      InteractuableId: 6,
      ActionId: 4,
      output: "But you mean, open up emotionally?",
      createdAt: new Date(),
			updatedAt: new Date(),
     },
     {
      InteractuableId: 6,
      ActionId: 5,
      output: "Oh Lucifer, bringer of light.",
      createdAt: new Date(),
			updatedAt: new Date(),
     },
     {
      InteractuableId: 6,
      ActionId: 6,
      output: "Please stop trying to push things.",
      createdAt: new Date(),
			updatedAt: new Date(),
     },
     {
      InteractuableId: 6,
      ActionId: 7,
      output: "But you mean, close down emotionally?",
      createdAt: new Date(),
			updatedAt: new Date(),
     },
     {
      InteractuableId: 6,
      ActionId: 8,
      output: "Hi, lamp!",
      createdAt: new Date(),
			updatedAt: new Date(),
     },
     {
      InteractuableId: 6,
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
