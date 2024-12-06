// ini buat relasi database yaa

const sequelize = require("../models/index.js").sequelize;
const { DataTypes } = require("sequelize");

const Users = require("../models/users")(sequelize, DataTypes);
const StudentAssignments = require("../models/studentassignments")(
  sequelize,
  DataTypes
);
const Assignments = require("../models/assignments")(sequelize, DataTypes);

Users.hasMany(StudentAssignments, {
  // user punya banyak assignment
  foreignKey: "studentId",
  as: "assignments",
});

StudentAssignments.belongsTo(Users, {
  foreignKey: "studentId",
  as: "students",
});

Assignments.hasMany(StudentAssignments, {
  // assignment punya banyak studentAssignment
  foreignKey: "assignmentId",
  as: "studentAssignment",
});

StudentAssignments.belongsTo(Assignments, {
  foreignKey: "assignmentId",
  as: "assignments",
});

module.exports = { Users, StudentAssignments, Assignments };
