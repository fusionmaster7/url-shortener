const mongoose = require("mongoose");

const urlSchema = mongoose.Schema({
  originalUrl: {
    type: String,
    required: true,
  },
  shortUrl: {
    type: String,
    required: true,
  },
  uniqueName: {
    type: String,
    required: true,
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

const Url = mongoose.model("Url", urlSchema);

module.exports = Url;
