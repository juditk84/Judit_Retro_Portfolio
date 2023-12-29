'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Outputs", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      InteractuableId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Interactuables",
          key: "id",
        },
        allowNull: false,
      },
      ActionId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Actions",
          key: "id",
        },
        allowNull: false,
      },
      output: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("ActorMovies");
  },
};