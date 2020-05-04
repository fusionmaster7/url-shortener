const express = require("express");
const path = require("path");
const db = require("./db");

const app = express();
db.connect();

app.use(express.json());

const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("working");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
