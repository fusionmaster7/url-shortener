const mongoose = require("mongoose");

const urlSchema = mongoose.Schema({
  originalUrl: {
    type: String,
    required: true,
  },
  customName: {
    type: String,
    required: true,
  },
  created: {
    type: Date,
    default: Date.now(),
  },
});

const Url = mongoose.model("Url", urlSchema);

module.exports = { urlSchema, Url };
