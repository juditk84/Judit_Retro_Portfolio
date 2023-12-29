'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {


     await queryInterface.bulkInsert('Actions', [{
      type: 'Give',
      createdAt: new Date(),
			updatedAt: new Date(),
     },
     {
      type: "Pick Up",
      createdAt: new Date(),
			updatedAt: new Date(),
    },
    {
      type: "Use",
      createdAt: new Date(),
			updatedAt: new Date(),
    },
    {
      type: "Open",
      createdAt: new Date(),
			updatedAt: new Date(),
    },
    {
      type: "Look at",
      createdAt: new Date(),
			updatedAt: new Date(),
    },
    {
      type: "Push",
      createdAt: new Date(),
			updatedAt: new Date(),
    },
    {
      type: "Close",
      createdAt: new Date(),
			updatedAt: new Date(),
    },
    {
      type: "Talk to",
      createdAt: new Date(),
			updatedAt: new Date(),
    },
    {
      type: "Pull",
      createdAt: new Date(),
		  updatedAt: new Date(),
    }], {});

  },

  async down (queryInterface, Sequelize) {
        
    await queryInterface.bulkDelete('Actions', null, {});
     
  }
};
