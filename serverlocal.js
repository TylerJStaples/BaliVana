const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path")
const model = require("./models");
require("dotenv").config();
const PORT = 3001;
const app = express();
app.use(express.static("views/src"))
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//const MONGO_URI = "mongodb://" + process.env.DB_USER + ":" + process.env.DB_PASS + "@ds239648.mlab.com:39648/balivana";
const MONGO_URI = "mongodb://localhost:27017/balivana"

mongoose.connect(MONGO_URI);

const db = mongoose.connection;

db.on("connected", () => {
    console.log("----------------Connected to DB------------------");
});
db.on("error", (err) => {
    console.log(err);
});

/*
app.get("/", (req, res)=>{
    res.sendFile(path.resolve("./public/index.html"));
})

app.get("/all", (req, res) => {
    model.balisong.find({}).then(found=>{
        res.render("home", {knife: found})
    });
});

app.post("/submit", (req, res) => {
    let knife = req.body;
    model.submition.create({
        name: knife.name,
        image: knife.pic,
        price: parseFloat(knife.price),
        maker: knife.maker,
        handlelength: parseFloat(knife.handle),
        bladelength: parseFloat(knife.blade),
        weight: parseFloat(knife.weight),
        pivot: knife.pivot,
    }, (err) => {
        if(err){
            console.log(err);
        }
        console.log("Bali inserted");
    });
});

app.get("/submit", (req, res) => {
    res.render("submit");
});
*/

app.listen(PORT, () => {
    console.log("app running on " + PORT);
});