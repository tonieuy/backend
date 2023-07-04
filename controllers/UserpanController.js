import Userlogin from "../models/UserAuth.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
 
// Endpoint untuk registrasi pengguna baru
export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Cek apakah pengguna sudah terdaftar
    const existingUser = await Userlogin.findOne({ username });
    if (existingUser) {
      return res.status(409).json({ message: 'Username already exists' });
    }

    // Hash password menggunakan bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);

    // Buat pengguna baru
    const user = new Userlogin({
      username,
      email,
      password: hashedPassword
    });

    // Simpan pengguna ke dalam database
    await user.save();

    res.status(201).json({ message: 'User created' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Endpoint untuk login
export const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Cari pengguna berdasarkan username
    const user = await Userlogin.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    // Periksa apakah password yang diberikan cocok dengan yang ada di database
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const deleteUser = async (req, res) => {
  try {
      const deleteduser = await Userlogin.deleteOne({username});
      res.status(200).json(deleteduser);
  } catch (error) {
      res.status(400).json({message: error.message});
  }
}
