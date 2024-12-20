const { Users } = require("../helper/relation"); // import dari relasi
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  try {
    const { fullName, email, password, kelas, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await Users.create({
      fullName,
      email,
      password: hashedPassword,
      kelas,
      role,
    });
    res.status(201).json({ message: "Berhasil Membuat Akun", user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Cek apakah input email dan password dikirim
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    // Cari user berdasarkan email
    const user = await Users.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Verifikasi password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid password" });
    }

    // Generate token
    const token = jwt.sign(
      {
        id: user.id,
        fullName: user.fullName,
        email: user.email,
        kelas: user.kelas,
        role: user.role,
      },
      process.env.JWT_SECRET,
      { expiresIn: "6h" } // Token berlaku selama 6 jam
    );

    // Kirim response dengan data user dan token
    res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: user.id,
        fullName: user.fullName,
        email: user.email,
        kelas: user.kelas,
        role: user.role,
      },
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const user = await Users.findAll();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: "User belum ada" });
  }
};

exports.getUsersById = async (req, res) => {
  try {
    const user = await Users.findByPk(req.params.id);
    if (!user) return res.status(404).json({ error: "User Tidak Ditemukan" });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: "Gagal Mengambil User" });
  }
};

exports.updateUsers = async (req, res) => {
  try {
    const { id } = req.params;
    const { fullName, email, password, role } = req.body;

    const user = await Users.findByPk(id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const updateData = { fullName, email, role };

    if (password) {
      const salt = await bcrypt.genSalt(10);
      updateData.password = await bcrypt.hash(password, salt);
    }

    await user.update(updateData);

    res
      .status(200)
      .json({ message: "User successfully updated", user: updateData });
  } catch (error) {
    console.error(error);
    res
      .status(400)
      .json({ error: "Failed to update user", details: error.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.query;

    const user = await Users.findByPk(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    await user.destroy();

    res.status(200).json({ message: "User successfully deleted" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Failed to delete user", details: error.message });
  }
};

