const express = require("express");
const app = express();
const db = require("./models/index");
const path = require("path");
const bodyParser = require("body-parser");
const allPokemon = require("./db.json");
require("dotenv").config();
const cors = require("cors");

const PORT = process.env.PORT || 8080;

if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "client/build")));
  // Handle React routing, return all requests to React app
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

const corsOptions = {
  origin: "https://react-node-express-pokemon.herokuapp.com",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.options("*", cors());

app.get("/pokemon", async function (req, res) {
  console.log("dsadas", req);
  res.send(allPokemon);
});

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`));
