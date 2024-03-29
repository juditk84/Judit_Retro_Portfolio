'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('Outputs', [{
      InteractuableId: 1,
      ActionId: 1,
      output: "A chair can't be given things, it's not in its nature.",
      createdAt: new Date(),
			updatedAt: new Date(),
     },
     {
      InteractuableId: 1,
      ActionId: 2,
      output: "You overestimate my strength and pocket space.",
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
      output: "It would be an interesting afternoon project, but no.",
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
      output: "Don't go around people's houses pushing chairs, please.",
      createdAt: new Date(),
			updatedAt: new Date(),
     },
     {
      InteractuableId: 1,
      ActionId: 7,
      output: "Nah.",
      createdAt: new Date(),
			updatedAt: new Date(),
     },
     {
      InteractuableId: 1,
      ActionId: 8,
      output: "Hi, chair!",
      createdAt: new Date(),
			updatedAt: new Date(),
     },
     {
      InteractuableId: 1,
      ActionId: 9,
      output: "Don't go around people's houses pulling chairs, please.",
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
