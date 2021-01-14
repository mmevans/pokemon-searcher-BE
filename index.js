const express = require("express");
const app = express();
const db = require("./models/index");
const path = require("path");
const bodyParser = require("body-parser");
const allPokemon = require("./db.json");
require("dotenv").config();
const cors = require("cors");

const PORT = process.env.PORT || 8080;

app.get("/pokemon", async function (req, res) {
  console.log(allPokemon);
  res.send(allPokemon);
});

if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "client/build")));
  // Handle React routing, return all requests to React app
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

const whitelist = [
  "http://localhost:3001",
  "http://localhost:8080",
  "https://react-node-express-pokemon.herokuapp.com",
];
const corsOptions = {
  origin: function (origin, callback) {
    console.log("** Origin of request " + origin);
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      console.log("Origin acceptable");
      callback(null, true);
    } else {
      console.log("Origin rejected");
      callback(new Error("Not allowed by CORS"));
    }
  },
};
app.use(cors(corsOptions));

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`));
