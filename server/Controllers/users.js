const mongoose = require("mongoose");
const User = require("../Models/users");

const signUser = async (req, res) => {
  const { username } = req.body;
  const user = await User.findOne({ username });
  if (user) {
    return res.json({
      okay: false,
      message: "Username already exists. Please select another",
    });
  } else {
    const newUser = new User({ username });
    const saved = await newUser.save();
    return res.status(201).json({
      okay: true,
      message: "Succesfully created new user",
      username,
    });
  }
};

const loginUser = async (req, res) => {
  const { username } = req.body;
  const user = await User.findOne({ username });
  if (user) {
    return res.status(200).json({
      okay: true,
      message: "User Logged in",
      username,
    });
  } else {
    res.json({
      okay: false,
      message: "User not found",
    });
  }
};

module.exports = { signUser, loginUser };
