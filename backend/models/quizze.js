'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class quizze extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  quizze.init({
    title: DataTypes.STRING,
    rating: DataTypes.FLOAT,
    rate_total: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'quizze',
  });
  return quizze;
};