'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StudentAssignments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  StudentAssignments.init({
    assigmentId: DataTypes.INTEGER,
    studentId: DataTypes.INTEGER,
    file_url: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'StudentAssignments',
  });
  return StudentAssignments;
};