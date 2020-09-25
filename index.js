const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.sendFile("index");
});

app.post("/", (req, res) => {
    const inputWord = req.body.inputWord;
    console.log(inputWord);
});

app.listen(3000, () => {
    console.log("Server is running on port 3000...");
});