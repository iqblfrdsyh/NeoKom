const {User} = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
    try {
        const {fullName, email, username, password, no_handphone, profile, role} = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({fullName, email, username, password:hashedPassword, no_handphone, profile, role});
        res.status(201).json({ message: 'User Registred', user});
    } catch(error) {
        res.status(500).json({ error: error.message});
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Cek apakah input email dan password dikirim
        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required' });
        }

        // Cari user berdasarkan email
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Verifikasi password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        // Generate token
        const token = jwt.sign(
            { id: user.id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: '1h' } // Token berlaku selama 1 jam
        );

        // Kirim response
        res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
