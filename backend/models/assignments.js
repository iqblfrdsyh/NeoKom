'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Assignments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Assignments.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    due_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Assignments',
  });
  return Assignments;
};