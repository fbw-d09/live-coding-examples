require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// hier importieren wir unseren User
const User = require('./models/User.js');

const app = express();
const port = process.env.PORT;
const databaseURL = `${ process.env.DB_URL }/${ process.env.DB_NAME }`;
const db = mongoose.connect(databaseURL);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/users/', (req, res) => 
{
    const newUser = new User();

    newUser.firstname = "   Max    "; // sollte trimmen
    newUser.lastname = "   Mustermann   "; // sollte trimmen
    newUser.username = "TestUser10"; // sollte unique sein
    newUser.role = "admin"; // sollte den default überschreiben
    newUser.birthday = { day: 27, month: 8, year: 1984}; // kann in objekt schreiben

    // geben wir einen wert an, der im enumerator nicht vorhanden ist, bekommen wir einen valiadationsfehler
    newUser.country = "france"; // darf nur werte enthalten, die der enumerator vorgibt

    newUser.profile = { darkmode: true, client: "IPhone 16 Pro Max Ultra SE" }; // wir sehen nach dme speichern, das ein komplettes dokument innerhalb von "profile" liegt.

    newUser.projects = [
        // wir können mehrere projekte einfügen, mit werten die zu unserem projektschema passen, und legen so, merhere subdokumente an
        {
            title: "TestProject",
            category: "Test"
        },
        {
            title: "Anderes Projekt",
            category: "Test",
            isRunning: true
        }
    ]

    // wir benutzen unsere vorherig erstellte methode um den passwort string umzuwandeln
    newUser.password = newUser.hashPassword("test1234");

    // eine statische methode wird über den constructor des modells aufgerufen, nicht über dessen instanz, also über "User", nicht über "newUser"
    User.test((data) => {
        console.log(data);
    });

    newUser
    .save()
    .then(doc => 
        res.status(200).json(doc)
    )
    .catch(err => {
        res.status(400).send(err.message);
    })
});

app.listen(port, () => console.log('Server läuft auf port', port));
