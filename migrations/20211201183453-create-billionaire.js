'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Billionaires', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      age: {
        type: Sequelize.INTEGER
      },
      company: {
        type: Sequelize.STRING
      },
      net_worth: {
        type: Sequelize.INTEGER
      },
      facts: {
        type: Sequelize.TEXT
      },
      source: {
        type: Sequelize.TEXT
      },
      self_made_score: {
        type: Sequelize.INTEGER
      },
      residence: {
        type: Sequelize.STRING
      },
      citizenship: {
        type: Sequelize.STRING
      },
      education: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Billionaires');
  }
};