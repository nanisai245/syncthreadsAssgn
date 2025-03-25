const User = require("../model/userModel");
const jwt = require("jsonwebtoken");

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRY,
  });
};

const createCookie = (user, statusCode, res) => {
  const token = createToken(user._id);

  res.cookie("jwt", token, {
    httpOnly: true, // Prevents client-side access
    secure: true, // Ensures cookie is only sent over HTTPS
    sameSite: "None", // Allows cross-site cookies
    path: "/", // Ensures the cookie is accessible across the app
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days expiration
  });

  res.status(statusCode).json({
    status: "success",
    token,
    data: {
      user,
    },
  });
};

exports.signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({
        status: "fail",
        message: "All fields are required",
      });
    }

    const isUserExist = await User.findOne({ email });

    if (isUserExist) {
      return res.status(400).json({
        status: "fail",
        message: "User already exists",
      });
    }

    const newUser = await User.create(req.body);

    createCookie(newUser, 201, res);
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: "Failed to signup!",
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const isUserExist = await User.findOne({ email }).select("+password");

    if (
      !isUserExist ||
      !(await isUserExist.comparePasswords(password, isUserExist.password))
    ) {
      return res.status(400).json({
        status: "fail",
        message: "Invalid email or password",
      });
    }

    createCookie(isUserExist, 200, res);
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: "Failed to login!",
    });
  }
};

exports.logout = async (req, res) => {
  try {
    res.clearCookie("jwt");

    res.status(200).json({
      status: "success",
      message: "Logged out successfully",
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: "Failed to logout!",
    });
  }
};
