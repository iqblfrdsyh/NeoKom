const express = require('express');
const { register, login } = require('../controller/UserController');
const authenticate = require('../middlewares/UserMiddlewares');
const router = express.Router();

router.post('/register', register);
router.post('/login', login);

// Rute logout menggunakan middleware authenticate
router.post('/logout', authenticate, (req, res) => {
    const token = req.headers['authorization']?.split(' ')[1];
    if (token) {
        req.app.locals.blacklist.add(token); // Tambahkan token ke blacklist
        return res.status(200).json({ message: 'Logout successful' });
    }
    return res.status(400).json({ message: 'Token not provided' });
});

module.exports = router;
