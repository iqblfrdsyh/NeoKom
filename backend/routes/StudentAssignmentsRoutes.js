const express = require("express");
const authenticate = require("../middlewares/UserMiddlewares");
const router = express.Router();
const {
  getAllStudentAssignments,
  createStudentAssignment,
} = require("../controllers/StudentAssignmentsControllers");

router.post("/", authenticate, createStudentAssignment);
router.get("/", authenticate, getAllStudentAssignments);

module.exports = router;
