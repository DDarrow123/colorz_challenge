const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");

// Run nodemon app.js from terminal to develop locally

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Middleware & static files
app.use(express.static("public/styles"));
app.use(express.static("public/assets"));

app.get("/", (req, res) => {
  res.render("index");
});

module.exports = app;
