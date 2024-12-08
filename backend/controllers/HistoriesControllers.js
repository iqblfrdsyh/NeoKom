const { Users, StudentAssignments, Grades, Histories } = require("../helper/relation");
const { Sequelize } = require("../models/index.js");

exports.getHistoriesByUserId = async (req, res) => {
  try {
    // Ambil userId dari user yang sedang login
    const userId = req.user.id;

    // Ambil histori dengan relasi ke StudentAssignments dan Grades
    const histories = await Histories.findAll({
      include: [
        {
          model: StudentAssignments,
          as: "studentAssignment",
          where: { studentId: userId }, // Filter berdasarkan userId
          include: [
            {
              model: Grades,
              as: "grade",
              attributes: ["id", "grade"], // Ambil nilai dari Grades
            },
          ],
        },
      ],
      where: {
        "$studentAssignment.grade.id$": { [Sequelize.Op.not]: null }, // Hanya histori dengan nilai Grades
      },
      order: [["createdAt", "DESC"]], // Urutkan dari terbaru
    });

    // Jika tidak ada histori ditemukan
    if (!histories || histories.length === 0) {
      return res.status(404).json({
        message: "Tidak ada histori dengan nilai yang ditemukan untuk user ini.",
      });
    }

    // Kirim respons data histori
    res.status(200).json({ histories });
  } catch (error) {
    res.status(500).json({
      error: "Gagal mengambil histori.",
      details: error.message,
    });
  }
};
