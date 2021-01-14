const express = require("express");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 5000;
app.get("/add-artist", function (req, res) {
  res.send("Hello World");
});

app.get("/add-song", function (req, res) {
  res.send();
});

app.listen(PORT);
