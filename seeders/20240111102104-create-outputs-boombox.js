'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('Outputs', [{
      InteractuableId: 5,
      ActionId: 1,
      output: "really, really... I just added the GIVE button to keep it monkey2.exe",
      createdAt: new Date(),
			updatedAt: new Date(),
     },
     {
      InteractuableId: 5,
      ActionId: 2,
      output: "I think i'll leave it there, it makes the room more FABULOUS.",
      createdAt: new Date(),
			updatedAt: new Date(),
     },
     {
      InteractuableId: 5,
      ActionId: 3,
      output: "use_boombox",
      createdAt: new Date(),
			updatedAt: new Date(),
     },
     {
      InteractuableId: 5,
      ActionId: 4,
      output: "It's fabulously working like this, I think i'll leave it closed.",
      createdAt: new Date(),
			updatedAt: new Date(),
     },
     {
      InteractuableId: 5,
      ActionId: 5,
      output: "it really is FABULOUS.",
      createdAt: new Date(),
			updatedAt: new Date(),
     },
     {
      InteractuableId: 5,
      ActionId: 6,
      output: "I can push the buttons if you want by USING the boombox.",
      createdAt: new Date(),
			updatedAt: new Date(),
     },
     {
      InteractuableId: 5,
      ActionId: 7,
      output: "It's not fabulously open.",
      createdAt: new Date(),
			updatedAt: new Date(),
     },
     {
      InteractuableId: 5,
      ActionId: 8,
      output: "hi, FABULOUS!",
      createdAt: new Date(),
			updatedAt: new Date(),
     },
     {
      InteractuableId: 5,
      ActionId: 9,
      output: "nah it would fall, break, bla bla...",
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
