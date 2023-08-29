require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose'); // wir importieren mongoose

// wir importieren unser modell
const User = require('./models/User.js'); // konvention: Großer anfangsbuchstabe, einzahl.

const app = express();
const port = process.env.PORT;
// const databaseURL = process.env.DB_URL + "/" + process.env.DB_NAME; 
const databaseURL = `${ process.env.DB_URL }/${ process.env.DB_NAME }`; // wir geben eine url für mongodb und die datenbank an
const db = mongoose.connect(databaseURL); // wir erstellen eine verbindung zur datenbank

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/users/', (req, res) =>
{
    // wir erstellen eine neue instanz von User:
    const newUser = new User();

    // wir kümmern uns manuell um die neuen daten, so können wir in diesem beispiel sichtbarer kontrollieren was wir machen.
    newUser.firstname = "       Max                  "; // sollte getrimmt werden
    newUser.lastname = "              Mustermann"; // sollte nicht getrimmt werden
    newUser.username = "TestUser3"; // sollte unique sein
    // newUser.role = "Admin"; // wir überschreiben den default wert
    newUser.birthday = { day: 27, month: 8, year: 1984 }; // wir können direkt daten in das objekt schreiben
    newUser.test = "abc"; // wenn wir einen schlüssel hinzufügen, der nicht im schema existiert, wird dieser beim speichern ignoriert

    newUser
    .save()
    .then(doc => res.status(200).send(doc))
    .catch(err => console.log(err.messsage));
})

app.listen(port, () =>
{
    console.log('Server läuft auf port', port);
});