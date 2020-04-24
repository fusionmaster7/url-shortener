const express = require("express");
const path = require("path");
const db = require("./db");
const { createShortLink, getShortLink } = require("./Controllers/url");

const app = express();
db.connect();

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

const port = process.env.PORT || 8000;

app.post("/createShortLink", createShortLink);

app.get("/:uniqueName", getShortLink);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
