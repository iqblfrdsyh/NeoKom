const { Assignments, StudentAssignments, Users } = require('../helper/relation');

class DashboardController {
  static async getDashboardStudent(req, res) {
    try {
      // Ambil userId dari session atau token login
      const userId = req.user.id; // Sesuaikan dengan bagaimana Anda mendapatkan userId dari middleware

      // Dapatkan data user yang login
      const user = await Users.findOne({
        where: { id: userId },
      });

      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      // Ambil semua tugas di kelas user
      const totalAssignments = await Assignments.count({
        where: {
          kelas: user.kelas, // Hanya tugas dengan kelas yang sesuai
        },
      });

      // Hitung tugas selesai (status: Sudah Dikerjakan)
      const completedAssignments = await StudentAssignments.count({
        where: {
          studentId: userId,
          status: 'Sudah Dikerjakan',
        },
      });

      // Hitung tugas belum selesai (status: Belum Dikerjakan)
      const pendingAssignments = await StudentAssignments.count({
        where: {
          studentId: userId,
          status: 'Belum Dikerjakan',
        },
      });

      // Kirimkan data ke front-end
      return res.status(200).json({
        totalAssignments,
        completedAssignments,
        pendingAssignments,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }
}

module.exports = DashboardController;
