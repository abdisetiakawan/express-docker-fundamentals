const User = require("../models/user.model");
const bcrypt = require("bcryptjs");

exports.signUp = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      username,
      password: hashPassword,
    });
    req.session.user = newUser;
    const userResponse = newUser.toObject();
    delete userResponse.password;
    res.status(201).json({
      status: "success",
      data: {
        user: userResponse,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
    });
  }
};

exports.signIn = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({
        status: "fail",
        message: "Invalid credentials",
      });
    }
    const checkPassword = await bcrypt.compare(password, user.password);
    if (!checkPassword) {
      return res.status(401).json({
        status: "fail",
        message: "Invalid credentials",
      });
    }
    req.session.user = user;
    const userResponse = user.toObject();
    delete userResponse.password;
    res.status(200).json({
      status: "success",
      data: {
        user: userResponse,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
    });
  }
};
