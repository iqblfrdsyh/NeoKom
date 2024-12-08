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
      // Relasi ke StudentAssignments
      Assignments.hasMany(models.StudentAssignments, { foreignKey: 'assignmentId' });
    }
    
  }
  Assignments.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    file_url: DataTypes.TEXT,
    due_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Assignments',
  });
  return Assignments;
};