const { StudentAssignments, Assignments } = require("../models");

exports.getAllStudentAssignments = async (req, res) => {
  try {
    const userId = req.user.id; // Pastikan userId diambil dari middleware autentikasi

    // Ambil data tugas berdasarkan studentId (user yang login)
    const studentAssignments = await StudentAssignments.findAll({
      where: { studentId: userId }, // Filter berdasarkan user yang login
      include: [
        {
          model: Assignments, // Relasi ke tabel Assignments
          attributes: ["id", "title", "description", "due_date"], // Data yang diambil dari tabel Assignments
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

exports.createStudentAssignment = async (req, res) => {
  try {
    const { assignmentId, studentId, file_url } = req.body;

    // Tentukan status berdasarkan file_url
    const status = file_url ? "Sudah Dikerjakan" : "Belum Dikerjakan";

    // Buat data baru
    const newStudentAssignment = await StudentAssignments.create({
      assignmentId,
      studentId,
      status,
      file_url,
    });

    res
      .status(201)
      .json({ message: "Data berhasil ditambahkan", newStudentAssignment });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Gagal menambahkan data", details: error.message });
  }
};
