"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Pokemon", {
      id: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      height: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      weight: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      pokemon_name: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      abilities: {
        allowNull: true,
        type: Sequelize.JSONB,
      },
      moves: {
        allowNull: true,
        type: Sequelize.JSONB,
      },
      stats: {
        allowNull: true,
        type: Sequelize.JSONB,
      },
      types: {
        allowNull: true,
        type: Sequelize.JSONB,
      },
      sprites: {
        allowNull: true,
        type: Sequelize.JSONB,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Pokemon");
  },
};
