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

exports.createAssignments = async (req, res) => {
  try {
    const { title, description, due_date } = req.body;

    const assignment = await Assignments.create({
      title,
      description,
      due_date,
    });
    res.status(201).json(assignment);
  } catch (error) {
    res.status(400).json({ error: "Gagal membuat Assignment baru" });
  }
};

exports.updateAssignments = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, due_date } = req.body;

    const assignment = await Assignments.findByPk(id);
    if (!assignment)
      return res.status(404).json({ error: "Assignment Tidak Ditemukan" });

    await assignment.update(
      { title, description, due_date },
      { where: { id: id } }
    );
    res.status(200).json(assignment);
  } catch (error) {
    res
      .status(400)
      .json({ error: "Gagal Update Assignment", details: error.message });
  }
};

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
