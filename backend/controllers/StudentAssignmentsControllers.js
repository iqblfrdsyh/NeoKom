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

    const status = file_url ? "Sudah Dikerjakan" : "Belum Dikerjakan";

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
