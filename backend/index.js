const express = require('express');
const dotenv = require('dotenv');
const UserRoutes = require('./routes/UsersRoutes');
const AssignmentsRoutes = require('./routes/AssignmentsRoutes');
const StudentAssignmentsRoutes = require('./routes/StudentAssignmentsRoutes');
const GradesRoutes = require('./routes/GradesRoutes');
const HistoriesRoutes = require('./routes/HistoriesRoutes');
const DashboardRoutes = require('./routes/DashboardRoutes');
const authenticate = require('./middlewares/UserMiddlewares'); // Pastikan path sesuai dengan struktur folder Anda
const path = require('path');


// Load environment variables from .env file
dotenv.config();

const app = express();

// Middleware untuk parsing JSON
app.use(express.json());

// Rute untuk autentikasi
app.use('/users', UserRoutes);
app.use('/assignments', AssignmentsRoutes);
app.use('/student', StudentAssignmentsRoutes);
app.use('/grade', GradesRoutes);
app.use('/histori', HistoriesRoutes);
app.use('/dashboardStudent', DashboardRoutes);

// Middleware untuk menyajikan file statis di folder "UploadModul"
app.use('/UploadModul', express.static(path.join(__dirname, 'UploadModul')));

// Middleware untuk menyajikan file statis di folder "UploadJawaban"
app.use('/UploadJawaban', express.static(path.join(__dirname, 'UploadJawaban')));

// Rute protected
app.get('/protected', authenticate, (req, res) => {
    res.status(200).json({ message: `Hello, ${req.user.email}` });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack); // Log error untuk debugging
    res.status(500).json({ message: 'Internal Server Error', error: err.message });
});

app.locals.blacklist = new Set(); // Untuk menyimpan token yang di-blacklist


// Jalankan server
const PORT = process.env.PORT || 3000; // Gunakan port dari .env atau default ke 3000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
