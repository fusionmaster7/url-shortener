const Url = require("../Models/url");

const baseUrl = process.env.BASE_URL || "http://localhost:3000";

const createShortLink = async (req, res) => {
  let { originalUrl, uniqueName } = req.body;
  try {
    let nameExists = Url.findOne({ uniqueName: uniqueName });
    if (nameExists) {
      return res.status(403).json({
        ok: false,
        error: "Unique Name already exists, choose another",
      });
    } else {
      const shortUrl = `${baseUrl}/${uniqueName};`;
      url = new Url({
        originalUrl,
        shortUrl,
        uniqueName,
      });

      const saved = await url.save();
      return res.json({
        ok: true,
        message: "Sucess",
        shortUrl,
      });
    }
  } catch (error) {
    return res.status(500).json({
      ok: false,
      status: "Server Error",
    });
  }
};

const getShortLink = async (req, res) => {
  const { uniqueName } = req.params;
  try {
    let url = await Url.findOne({ uniqueName: uniqueName });
    if (url) {
      return res.redirect(url.originalUrl);
    } else {
      return res.status(404).json({ error: "Not found" });
    }
  } catch (error) {
    console.log(err);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = { createShortLink, getShortLink };
