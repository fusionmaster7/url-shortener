const express = require("express");
const path = require("path");
const db = require("./db");

const { signUser, loginUser } = require("./Controllers/users");
const { getUrls, addUrl, viewUrl } = require("./Controllers/url");

const app = express();
db.connect();

app.use(express.json());

const port = process.env.PORT || 8000;

//Url routes
app.get("/:username", getUrls);
app.get("/:username/:url", viewUrl);
app.post("/add", addUrl);

//User routes
app.post("/signup", signUser);
app.post("/login", loginUser);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
