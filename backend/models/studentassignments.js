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
      StudentAssignments.belongsTo(models.Assignments, { foreignKey: 'assignmentId' });
    }
  }
  StudentAssignments.init({
    assignmentId: DataTypes.INTEGER,
    studentId: DataTypes.INTEGER,
    status: DataTypes.ENUM('Sudah Dikerjakan', 'Belum Dikerjakan'),
    file_url: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'StudentAssignments',
  });
  return StudentAssignments;
};