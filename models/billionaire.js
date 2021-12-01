'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Billionaire extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Billionaire.init({
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    company: DataTypes.STRING,
    net_worth: DataTypes.INTEGER,
    facts: DataTypes.TEXT,
    source: DataTypes.TEXT,
    self_made_score: DataTypes.INTEGER,
    residence: DataTypes.STRING,
    citizenship: DataTypes.STRING,
    education: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Billionaire',
  });
  return Billionaire;
};