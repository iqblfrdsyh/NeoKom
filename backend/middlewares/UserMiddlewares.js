const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(403).json({ message: 'No token provided' });
    }

    // Periksa apakah token di-blacklist
    if (req.app.locals.blacklist.has(token)) {
        return res.status(401).json({ message: 'Token has been logged out' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verifikasi token
        req.user = decoded; // Simpan data user ke request
        next();
    } catch (err) {
        return res.status(401).json({ message: 'Login terlebih dahulu or expired token' });
    }
};


module.exports = authenticate;
