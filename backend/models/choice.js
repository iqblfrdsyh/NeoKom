'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class choice extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  choice.init({
    question_id: DataTypes.INTEGER,
    choice_1: DataTypes.STRING,
    choice_2: DataTypes.STRING,
    choice_3: DataTypes.STRING,
    choice_4: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'choice',
  });
  return choice;
};