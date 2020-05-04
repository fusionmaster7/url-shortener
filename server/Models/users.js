const mongoose = require("mongoose");
const { urlSchema } = require("./url");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  urls: [urlSchema],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
