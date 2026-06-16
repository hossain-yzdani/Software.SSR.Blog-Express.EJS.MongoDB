import User from '../models/userModel.js';
import { hashPassword } from '../utils/hash.js';
import { generateToken } from "../utils/jwt.js";

export const register = async (req,res) => {
  res.render("auth/register", { activePage: 'register', user: req.user });
}

export const login = async (req,res) => {
  res.render("auth/login", { activePage: 'login', user: req.user });
};


export const registerAPI = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'The given email already exists.' });
    }

    const hashedPassword = await hashPassword(password);
    const user = await User.create({ fullname, email, password: hashedPassword });
    const token = generateToken(user._id, user.role);
    res.setHeader('authorization', `Bearer ${token}`);
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 7 * 24 * 60 * 60 * 1000,
      sameSite: "strict",
    });
    res.status(201).redirect("/");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const loginAPI = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Please enter your email.' });
    }

    const user = await User.findOne({ email }).select('+password');
    if (!user) {
      return res.status(400).json({ message: 'The given email does not exist.' });
    }
    const isMatch = await user.comparePassword(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'The given password is wrong.' });
    }
    const token = generateToken(user._id, user.role);
    res.setHeader('authorization', `Bearer ${token}`);
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 7 * 24 * 60 * 60 * 1000,
      sameSite: "strict",
    });
    res.status(201).redirect("/");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { fullname, email } = req.body;
    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }
    user.fullname = fullname;
    user.email = email;
    await user.save();
    res.status(200).redirect('/me');
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updatePassword = async (req, res) => {
  try {
    const { confirmPassword, newPassword } = req.body;

    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    const isMatch = await user.comparePassword(confirmPassword, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'The current password is wrong.' });
    }

    const hashedPassword = await hashPassword(newPassword);
    user.password = hashedPassword;
    await user.save();
    res.status(200).redirect('/me');
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const logoutAPI = (req, res) => {
  res.cookie('token', 'none', { expires: new Date(Date.now() + 10 * 1000), httpOnly: true });
  res.status(200).redirect('/');
};

