const { Grades, StudentAssignments } = require('../helper/relation');

exports.getAllGrades = async (req, res) => {
  try {
    const grade = await Grades.findAll();
    res.status(200).json(grade);
  } catch (error) {
    res.status(500).json({ error: "Grades belum ada" });
  }
};

exports.getGradesById = async (req, res) => {
  try {
    const grade = await Grades.findByPk(req.params.id);
    if (!grade) return res.status(404).json({ error: "grade Tidak Ditemukan" });
    res.status(200).json(grade);
  } catch (error) {
    res.status(500).json({ error: "Gagal Mengambil Grade" });
  }
};

// // Read Grades (By StudentAssignmentId)
// exports.getGradesByStudentAssignmentId = async (req, res) => {
//   try {
//     const { studentAssignmentId } = req.params;

//     // Ambil data Grades berdasarkan `studentAssignmentId`
//     const grades = await Grades.findAll({ where: { studentAssignmentId } });

//     if (grades.length === 0) {
//       return res.status(404).json({ error: 'Tidak ada Grade yang ditemukan.' });
//     }

//     res.status(200).json({ grades });
//   } catch (error) {
//     res.status(500).json({ error: 'Gagal mengambil data Grades.', details: error.message });
//   }
// };

// Create Grade
exports.createGrades = async (req, res) => {
  try {
    const { studentAssignmentId, grade, comments } = req.body;

    // Validasi apakah `studentAssignmentId` ada
    const studentAssignment = await StudentAssignments.findByPk(studentAssignmentId);
    
    if (!studentAssignment) {
      return res.status(404).json({ error: 'StudentAssignment tidak ditemukan.' });
    }

    // Buat Grade baru
    const newGrade = await Grades.create({
      studentAssignmentId,
      grade,
      comments
    });

    res.status(201).json({ message: 'Grade berhasil dibuat.', grade: newGrade });
  } catch (error) {
    res.status(500).json({ error: 'Gagal membuat Grade.', details: error.message });
  }
};

// Update Grade
exports.updateGrades = async (req, res) => {
  try {
    const { id } = req.params;
    const { grade } = req.body;

    // Cari Grade berdasarkan ID
    const gradeRecord = await Grades.findByPk(id);
    if (!gradeRecord) {
      return res.status(404).json({ error: 'Grade tidak ditemukan.' });
    }

    // Update Grade
    gradeRecord.grade = grade;
    await gradeRecord.save();

    res.status(200).json({ message: 'Grade berhasil diperbarui.', grade: gradeRecord });
  } catch (error) {
    res.status(500).json({ error: 'Gagal memperbarui Grade.', details: error.message });
  }
};

// Delete Grade
exports.deleteGrades = async (req, res) => {
  try {
    const { id } = req.params;

    // Cari Grade berdasarkan ID
    const gradeRecord = await Grades.findByPk(id);
    if (!gradeRecord) {
      return res.status(404).json({ error: 'Grade tidak ditemukan.' });
    }

    // Hapus Grade
    await gradeRecord.destroy();

    res.status(200).json({ message: 'Grade berhasil dihapus.' });
  } catch (error) {
    res.status(500).json({ error: 'Gagal menghapus Grade.', details: error.message });
  }
};
