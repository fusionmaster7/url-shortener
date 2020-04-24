const mongoose = require("mongoose");

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/url";

const connect = () => {
  mongoose
    .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log("DB Connected");
    })
    .catch((err) => {
      console.log(err);
    });
  mongoose.connection.on("error", (err) => {
    console.log(`DB Connections error: ${err.message}`);
  });
};

module.exports = { connect };
