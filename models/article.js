'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Article extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Article.init({
    title: DataTypes.TEXT,
    category: DataTypes.STRING,
    author: DataTypes.TEXT,
    date: DataTypes.INTEGER,
    time: DataTypes.INTEGER,
    content: DataTypes.TEXT,
    views: DataTypes.INTEGER,
    comments: DataTypes.TEXT,
    likes: DataTypes.INTEGER,
    bio: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Article',
  });
  return Article;
};