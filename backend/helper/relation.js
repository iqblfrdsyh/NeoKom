// ini buat relasi database yaa
const sequelize = require("../models/index.js").sequelize;
const { DataTypes } = require("sequelize");

// Import model
const Users = require("../models/users")(sequelize, DataTypes);
const StudentAssignments = require("../models/studentassignments")(
  sequelize,
  DataTypes
);
const Assignments = require("../models/assignments")(sequelize, DataTypes);
const Grades = require("../models/grades")(sequelize, DataTypes); // Import Grades
const Histories = require("../models/histories")(sequelize, DataTypes); // Import Histories

// Relasi Users dengan StudentAssignments
Users.hasMany(StudentAssignments, {
  foreignKey: "studentId",
  as: "assignments",
});

StudentAssignments.belongsTo(Users, {
  foreignKey: "studentId",
  as: "students",
});

// Relasi Assignments dengan StudentAssignments
Assignments.hasMany(StudentAssignments, {
  foreignKey: "assignmentId",
  as: "studentAssignment",
});

StudentAssignments.belongsTo(Assignments, {
  foreignKey: "assignmentId",
  as: "assignments",
});

// // Relasi StudentAssignments dengan Grades
// StudentAssignments.hasOne(Grades, {
//   foreignKey: "studentAssignmentId",
//   as: "grade",
// });

// Grades.belongsTo(StudentAssignments, {
//   foreignKey: "studentAssignmentId",
//   as: "studentAssignment",
// });

// // Relasi Grades dengan Histories
// Grades.hasMany(Histories, {
//   foreignKey: "gradeId",
//   as: "histories",
// });

// Histories.belongsTo(Grades, {
//   foreignKey: "gradeId",
//   as: "grade",
// });

// // Relasi StudentAssignments dengan Histories
// StudentAssignments.hasMany(Histories, {
//   foreignKey: "studentAssignmentId",
//   as: "historyRecords",
// });

// Histories.belongsTo(StudentAssignments, {
//   foreignKey: "studentAssignmentId",
//   as: "studentAssignment",
// });

// Export semua model dan relasi
module.exports = { Users, StudentAssignments, Assignments, Grades, Histories };
