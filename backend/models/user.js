'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.TEXT,
    no_handphone: DataTypes.STRING,
    profile: DataTypes.TEXT,
    role: DataTypes.ENUM('draft', 'published', 'archived')
  }, {
    sequelize,
    modelName: 'User',
  });

//   User.associate = (models) => {
//     User.hasMany(models.Course, { foreignKey: 'teacher_id' }); // Relasi ke courses
//     User.hasMany(models.Submission, { foreignKey: 'student_id' }); // Relasi ke submissions
// };
  return User;
};