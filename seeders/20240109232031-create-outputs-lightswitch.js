'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('Outputs', [{
      InteractuableId: 4,
      ActionId: 1,
      output: "This button is useless trust me xD",
      createdAt: new Date(),
			updatedAt: new Date(),
     },
     {
      InteractuableId: 4,
      ActionId: 2,
      output: "Can't go around ripping things off walls.",
      createdAt: new Date(),
			updatedAt: new Date(),
     },
     {
      InteractuableId: 4,
      ActionId: 3,
      output: "use_lightswitch",
      createdAt: new Date(),
			updatedAt: new Date(),
     },
     {
      InteractuableId: 4,
      ActionId: 4,
      output: "Nothing to be fixed about it.",
      createdAt: new Date(),
			updatedAt: new Date(),
     },
     {
      InteractuableId: 4,
      ActionId: 5,
      output: "It's a lightswitch that goes on and off. Life and its wonders.",
      createdAt: new Date(),
			updatedAt: new Date(),
     },
     {
      InteractuableId: 4,
      ActionId: 6,
      output: "Let's not get carried away...",
      createdAt: new Date(),
			updatedAt: new Date(),
     },
     {
      InteractuableId: 4,
      ActionId: 7,
      output: "It's more about USING rather than closing.",
      createdAt: new Date(),
			updatedAt: new Date(),
     },
     {
      InteractuableId: 4,
      ActionId: 8,
      output: "Hi, lightswitch!",
      createdAt: new Date(),
			updatedAt: new Date(),
     },
     {
      InteractuableId: 4,
      ActionId: 9,
      output: "You want me to pull it from the wall? Not happening.",
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
