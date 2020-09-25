const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const checkPyramid = require(__dirname + "/checkPyramid.js");

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let message = "";

app.get("/", (req, res) => {
  res.render("index", { message: message });
});

app.post("/", (req, res) => {
  const inputWord = req.body.inputWord;
  // add logic here
  const result = checkPyramid(inputWord);
  console.log("This is the result: " + result);
  if (result) {
    message = inputWord + " is a pyramid word";
  } else {
    message = inputWord + " is not a pyramid word";
  }
  res.redirect("/");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000...");
});
