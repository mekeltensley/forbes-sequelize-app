'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UnderThirtyProfile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  UnderThirtyProfile.init({
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    position: DataTypes.STRING,
    company: DataTypes.STRING,
    bio: DataTypes.TEXT,
    residence: DataTypes.STRING,
    education: DataTypes.STRING,
    social: DataTypes.STRING,
    favorite_app: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'UnderThirtyProfile',
  });
  return UnderThirtyProfile;
};