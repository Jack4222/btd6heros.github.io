const express = require('express');
const app = express();

app.use(express.json())


//app.use(express.static(__dirname + "/public"))
app.use(express.static("./public"))
app.set("view engine", "ejs");
app.set("views", "./views");



const monkeys = require("./data/monkeys.json");
// import students from "data/students.json";


app.get("/", (req, res) => {
    res.render("index", { monkeys });
});


app.get("/hero/:id", (req, res) => {
    const monkey = monkeys.find(s => s.id == req.params.id);
    res.render("heropage", { monkey });
});


app.all("*", (req, res) => {
    res.status(404).send("404 Not Found");
});


const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});