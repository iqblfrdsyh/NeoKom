const multer = require('multer');
const path = require('path');
const { Assignments } = require("../helper/relation"); // import dari relasi

exports.getAllAssignments = async (req, res) => {
  try {
    const assignment = await Assignments.findAll();
    res.status(200).json(assignment);
  } catch (error) {
    res.status(500).json({ error: "Assignment Masih Kosong" });
  }
};

exports.getAssignmentsById = async (req, res) => {
  try {
    const assignment = await Assignments.findByPk(req.params.id);
    if (!assignment)
      return res.status(404).json({ error: "Assignment tidak ditemukan" });
    res.status(200).json(assignment);
  } catch (error) {
    res.status(500).json({ error: "Gagal Mendapatkan Assignment" });
  }
};


// Konfigurasi Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'UploadModuls/'); // Folder tempat file akan disimpan
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, `${uniqueSuffix}-${file.originalname}`);
  },
});

// Filter file untuk memastikan hanya jenis file tertentu yang diterima
const fileFilter = (req, file, cb) => {
  const allowedTypes = ['application/pdf', 'image/jpeg', 'image/png'];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Tipe file tidak didukung. Hanya PDF, JPG, dan PNG yang diizinkan.'), false);
  }
};

// Middleware multer
const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 }, // Maksimal ukuran file 5MB
});

// Controller untuk membuat Assignment dengan file upload
exports.createAssignments = async (req, res) => {
  // Gunakan Multer middleware untuk menangani file upload
  upload.single('file_url')(req, res, async (err) => {
    if (err instanceof multer.MulterError) {
      return res.status(400).json({ error: `Multer error: ${err.message}` });
    } else if (err) {
      return res.status(400).json({ error: `Error: ${err.message}` });
    }

    try {
      const { title, description, due_date } = req.body;

      // Validasi apakah file diunggah
      if (!req.file) {
        return res.status(400).json({ error: 'File tidak ditemukan.' });
      }

      // Simpan data ke database
      const assignment = await Assignments.create({
        title,
        description,
        due_date,
        file_url: req.file.path, // Path file disimpan
      });

      res.status(201).json(assignment);
    } catch (error) {
      res.status(500).json({ error: 'Gagal membuat Assignment baru.' });
    }
  });
};

// exports.updateAssignments = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { title, description, due_date } = req.body;

//     const assignment = await Assignments.findByPk(id);
//     if (!assignment)
//       return res.status(404).json({ error: "Assignment Tidak Ditemukan" });

//     await assignment.update(
//       { title, description, due_date },
//       { where: { id: id } }
//     );
//     res.status(200).json(assignment);
//   } catch (error) {
//     res
//       .status(400)
//       .json({ error: "Gagal Update Assignment", details: error.message });
//   }
// };

exports.deleteAssignments = async (req, res) => {
  try {
    const { id } = req.params;

    const assignment = await Assignments.findByPk(id);
    if (!assignment)
      return res.status(404).json({ error: "Assignment Tidak Ditemukan" });

    // Validasi apakah user adalah seorang Guru
    //     if (req.user.role !== 'Guru' && req.user.role !== 'Admin') {
    //       return res.status(403).json({ error: "Kamu Tidak Berhak Mengedit Content" });
    //   }

    await assignment.destroy({ where: { id: id } });
    res.status(200).json({ message: "Assignment Berhasil Dihapus" });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Gagal Menghapus Assignment", details: error.message });
  }
};
