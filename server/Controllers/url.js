const mongoose = require("mongoose");
const User = require("../Models/users");

const getUrls = async (req, res) => {
  const username = req.params.username;
  const user = await User.findOne({ username });
  if (user) {
    return res.status(200).json({
      okay: true,
      urls: [...user.urls],
    });
  } else {
    return res.status(404).json({
      okay: false,
      message: "User not found",
    });
  }
};

const addUrl = async (req, res) => {
  const { username, originalUrl, baseUrl, customName } = req.body;
  const newUrl = {
    originalUrl,
    baseUrl,
    customName,
  };
  const user = await User.findOne({ username });
  if (user) {
    user.urls.push(newUrl);
    const saved = await user.save();
    return res.status(201).json({
      okay: true,
      message: saved,
    });
  } else {
  }
};

const viewUrl = async (req, res) => {
  console.log(req.params);
  const { username, url } = req.params;
  const user = await User.findOne({ username });
  if (user) {
    const resp = user.urls.find((e) => e.customName === url);
    return res.redirect(resp.originalUrl);
  } else {
    return res.status(404).json({
      okay: false,
      message: "User not found",
    });
  }
};

module.exports = { getUrls, addUrl, viewUrl };
