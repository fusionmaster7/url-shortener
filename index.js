const express = require("express");
const path = require("path");
const db = require("./db");

const app = express();
db.connect();

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("Working");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
