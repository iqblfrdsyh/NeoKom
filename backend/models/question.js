'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  question.init({
    quiz_id: DataTypes.INTEGER,
    question: DataTypes.TEXT,
    question_type: DataTypes.ENUM('multiple_choice','essay'),
    choice_id: DataTypes.INTEGER,
    essay_answer: DataTypes.STRING,
    correct_answer: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'question',
  });
  return question;
};