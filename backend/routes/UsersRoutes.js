const express = require('express');
const authenticate = require('../middlewares/UserMiddlewares');
const router = express.Router();
const { 
    register,
    login,
    getAllUsers,
    getUsersById,
    updateUsers } = require('../controllers/UsersControllers');


router.post('/register', register);
router.post('/login', login);
router.get('/', getAllUsers);
router.get('/:id', getUsersById);
router.put('/:id', updateUsers);

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
