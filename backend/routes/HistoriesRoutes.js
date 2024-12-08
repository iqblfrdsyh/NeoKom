const express = require('express');
const authenticate = require('../middlewares/UserMiddlewares');
const router = express.Router();
const {
    getHistoriesByUserId
} = require('../controllers/HistoriesControllers');

router.get('/', authenticate, getHistoriesByUserId);

module.exports = router;
