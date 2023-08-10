require("dotenv").config();

// wir importieren express
const express = require('express');

// wir importieren das modul body-parser
const bodyParser = require('body-parser');

const homeController = require('./controllers/homeController');
const signupController = require('./controllers/signupController');

// wir erstellen eine instanz von express
const app = express();

// wir erstellen eine variable für die port nummer:
const port = process.env.PORT;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// wir erstellen einen controller für die methode post:
app.post("/", homeController);

// wir können den body auslesen:
app.post("/signup", signupController);

// wir sagen express es soll auf dem spezifizierten port zuhören:
app.listen(port, () => console.log("Hallo", port));