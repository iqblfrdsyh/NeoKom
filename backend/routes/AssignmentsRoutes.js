const express = require('express');
const authenticate = require('../middlewares/UserMiddlewares');
const router = express.Router();
const {
    getAllAssignments,
    getAssignmentsById,
    createAssignments,
    updateAssignments,
    deleteAssignments } = require('../controllers/AssignmentsControllers');

router.post('/', createAssignments);
router.get('/', getAllAssignments);
router.get('/:id', getAssignmentsById);
router.put('/:id', updateAssignments);
router.delete('/:id', deleteAssignments);

module.exports = router;
