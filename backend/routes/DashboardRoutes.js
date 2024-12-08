const express = require('express');
const authenticate = require('../middlewares/UserMiddlewares');
const router = express.Router();
const {
    getDashboardStudent,
} = require('../controllers/DashboardControllers');

router.get('/', authenticate, getDashboardStudent);

module.exports = router;
