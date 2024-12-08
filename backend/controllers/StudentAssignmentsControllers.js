const multer = require("multer");
const path = require("path");
const { StudentAssignments, Assignments } = require("../helper/relation"); // import dari relasi

exports.getAllStudentAssignments = async (req, res) => {
  try {
    const userId = req.user.id;
    const studentAssignments = await StudentAssignments.findAll({
      where: { studentId: userId },
      include: [
        {
          model: Assignments,
          attributes: ["id", "title", "description", "due_date"],
          as: "assignments"
        },
      ],
    });

    if (studentAssignments.length === 0) {
      return res
        .status(404)
        .json({ message: "Tidak ada tugas yang ditemukan untuk user ini." });
    }

    res.status(200).json({ assignments: studentAssignments });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Gagal mengambil data tugas.", details: error.message });
  }
};

// Set destination folder and filename
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "UploadJawaban/"); // Folder tujuan
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname)); // Nama file unik
  },
});

// Filter file yang diizinkan (opsional)
const fileFilter = (req, file, cb) => {
  const allowedTypes = ["application/pdf", "image/jpeg", "image/png"];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("File type not allowed"), false);
  }
};

// Middleware untuk upload file
const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 }, // Maksimum ukuran 5MB
});

exports.createStudentAssignment = async (req, res) => {
   // Gunakan Multer middleware untuk menangani file upload
   upload.single('file_url')(req, res, async (err) => {
    if (err instanceof multer.MulterError) {
      return res.status(400).json({ error: `Multer error: ${err.message}` });
    } else if (err) {
      return res.status(400).json({ error: `Error: ${err.message}` });
    }
    try {
      const { assignmentId, status } = req.body;
      const studentId = req.user.id;

      // Validasi apakah file diunggah
      if (!req.file) {
        return res.status(400).json({ error: 'File tidak ditemukan.' });
      }

      // Simpan data ke database
      const StudentAssignment = await StudentAssignments.create({
        assignmentId,
        studentId,
        status,
        file_url: req.file.path, // Path file disimpan
      });

      res.status(201).json(StudentAssignment);
    } catch (error) {
      res.status(500).json({ error: 'Gagal membuat Assignment baru.' });
    }
  });
};


