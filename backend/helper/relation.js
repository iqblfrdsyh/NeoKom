// ini buat relasi database yaa

const { DataTypes } = require("sequelize");
const { sequelize } = require("../models");

const Users = require("../models/users")(sequelize, DataTypes);
const StudentAssignments = require("../models/studentassignments")(
  sequelize,
  DataTypes
);
const Assignments = require("../models/assignments")(sequelize, DataTypes);

Users.hasMany(StudentAssignments, { // user punya banyak assignment
  foreignKey: "studentId",
  as: "assignments", 
});

StudentAssignments.belongsTo(Users, { 
  foreignKey: "studentId",
  as: "students", 
});

Assignments.hasMany(StudentAssignments, { // assignment punya banyak studentAssignment
  foreignKey: "assignmentId",
  as: "studentAssignment", 
});

StudentAssignments.belongsTo(Assignments, {
  foreignKey: "assignmentId",
  as: "assignments",  
});

export { Users, StudentAssignments, Assignments };
