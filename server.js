const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path")
const model = require("./models");
require("dotenv").config();
const PORT = 3001;
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

console.log("DB will not connect on UNCC wifi");

const MONGO_URI = "mongodb://" + process.env.DB_USER + ":" + process.env.DB_PASS + "@ds239648.mlab.com:39648/balivana";
//const MONGO_URI = "mongodb://localhost/balivana"

mongoose.connect(MONGO_URI, {useNewUrlParser: true});

const db = mongoose.connection;

db.on("connected", ()=>{
    console.log("----------------Connected to DB------------------");
});
db.on("error", (err)=>{
    console.log(err);
});

app.get("/", (req, res) => {
    res.send("Home page")
});

app.get("/all", (req, res) => {
    model.balisong.find((err, found) => {
        res.render("home", {knife: found});
        console.log(err);
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
        pivot: knife.pivot,
        weight: parseFloat(knife.weight),
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

app.listen(PORT, () => {
    console.log("app running on 3000");
});