const express = require('express');
const authenticate = require('../middlewares/UserMiddlewares');
const router = express.Router();
const {
    getAllStudentAssignments,
    createStudentAssignment } = require('../controllers/StudentAssignmentsControllers');

router.post('/', createStudentAssignment);
router.get('/', getAllStudentAssignments);

module.exports = router;
