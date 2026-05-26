import { verifyToken } from '../utils/jwt.js';
import User from '../models/userModel.js';

export const protect = (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  } else if (req.cookies?.token) {
    token = req.cookies.token;
  }
  if (!token) {
    return res
      .status(401)
      .json({ message: "Please sign in first." });
  }
  const decoded = verifyToken(token);
  if (!decoded) {
    return res.status(401).json({ message: 'Token is not valid' });
  }
  const user = User.findById(decoded.id).select('-password');
    if (!user) {
      return res.status(401).json({ message: 'The user with the given id was not found' });
  }
  req.user = user;
  next();
}

export const restrictTo = (...roles) => {
  return (req, res, next) => {
    if (roles.includes(req.user.role)) {
      return res.status.json(403).json({ message: 'You dont have a permission to get this section' });
    }
    next();
  }
}