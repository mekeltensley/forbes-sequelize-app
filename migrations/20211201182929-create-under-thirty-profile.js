'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('UnderThirtyProfiles', {
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
      position: {
        type: Sequelize.STRING
      },
      company: {
        type: Sequelize.STRING
      },
      bio: {
        type: Sequelize.TEXT
      },
      residence: {
        type: Sequelize.STRING
      },
      education: {
        type: Sequelize.STRING
      },
      social: {
        type: Sequelize.STRING
      },
      favorite_app: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('UnderThirtyProfiles');
  }
};