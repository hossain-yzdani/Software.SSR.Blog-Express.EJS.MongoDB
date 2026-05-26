import User from '../models/userModel.js';
import { generateToken } from "../utils/jwt.js";

export const register = async (req,res) => {
  res.render("auth/register", { activePage: 'register' });
}

export const login = async (req,res) => {
  res.render("auth/login", { activePage: 'login' });
};


const sendTokenResponse = (user, statusCode, res) => {
  const token = generateToken({ id: user._id, role: user.role });

  const cookieOptions = {
    expires: new Date(Date.now() + process.env.COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000),
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
  };

  res.cookie('token', token, cookieOptions);

  res.status(statusCode).json({
    status: 'success',
    token,
    data: {
      user: {
        id: user._id,
        fullname: user.fullname,
        email: user.email,
        role: user.role,
      },
    },
  });
};

export const registerAPI = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'The given email already exists.' });
    }

    const user = await User.create({ fullname, email, password });
    sendTokenResponse(user, 201, res);
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
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ message: 'Email or password is not valid.' });
    }

    sendTokenResponse(user, 200, res);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const logoutAPI = (req, res) => {
  res.cookie('token', 'none', { expires: new Date(Date.now() + 10 * 1000), httpOnly: true });
  res.status(200).json({ message: 'You loged out successfully' });
};

export const getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    res.render("pages/me", { user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};