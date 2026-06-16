import { verifyToken } from "../utils/jwt.js";
import User from "../models/userModel.js";

export const protect = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

  if (!token) {
    req.user = null;
    return next();
  }

  let decoded;
  try {
    decoded = verifyToken(token);
  } catch (err) {
    req.user = null;
    return next();
  }

  if (!decoded) {
    req.user = null;
    return next();
  }
  if (!decoded) {
    return res.status(401).json({ message: "Token is not valid" });
  }
  const user = await User.findById(decoded.id).select("-password");
  if (!user) {
    return res
      .status(401)
      .json({ message: "The user with the given id was not found" });
  }
  req.user = user;
  next();
};

export const restrictTo = (...roles) => {
  return (req, res, next) => {
    if (roles.includes(req.user.role)) {
      return res
        .status(403)
        .json({ message: "You dont have a permission to get this section" });
    }
    next();
  };
};
