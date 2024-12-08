const express = require('express');
const authenticate = require('../middlewares/UserMiddlewares');
const router = express.Router();
const {
    getAllGrades,
    getGradesById,
    // getGradesByStudentAssignmentId,
    createGrades,
    updateGrades,
    deleteGrades } = require('../controllers/GradesControllers');

router.post('/', createGrades);
router.get('/', getAllGrades);
// router.get('/studentAssignment/:id', getGradesByStudentAssignmentId);
router.get('/:id', getGradesById);
router.put('/:id', updateGrades);
router.delete('/:id', deleteGrades);

module.exports = router;
