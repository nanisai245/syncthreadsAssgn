const User = require("../model/userModel");
const jwt = require("jsonwebtoken");
const { promisify } = require("util");

exports.protect = async (req, res, next) => {
  try {
    const token = req.cookies.jwt || req.headers?.authorization.split(" ")[1];

    if (!token) {
      return res.status(401).json({
        status: "fail",
        message: "Please login first",
      });
    }

    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

    const currentUser = await User.findById(decoded.id);

    if (!currentUser) {
      return res.status(400).json({
        status: "fail",
        message: "User belonging to this token does not exist",
      });
    }

    req.user = currentUser;

    next();
  } catch (err) {
    return res.status(500).json({
      status: "fail",
      message: "Failed to visit",
    });
  }
};
