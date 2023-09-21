require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');

// wir importieren mongoose, weitere informationen zu mongoose findet ihr in der dokumentation: https://mongoosejs.com/docs/guide.html
// const mongoose = require('mongoose');

// wir importieren unser modell:
const Car = require('./models/Car.js');

// wir importieren unsere verbindung
const { connect, closeConnection } = require('./configs/db.js');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// wir erstellen unsere variable für den port der express applikation:
const port = process.env.PORT;

// hier kommen unsere routen hin:

// POST /cars/ - einen eintrag erstellen
app.post('/cars/', async (req, res) =>
{
    // zur absicherung geben wir uns den body in der konsole aus
    console.log(req.body);

    // wir holen uns die informationen aus dem body
    const { brand, name, type, year } = req.body;

    try {
        connect().then(async (db) =>
        {
            // wir erstellen einen neuen eintrag
            const newCar = new Car({
                brand,
                name,
                type,
                year
            });

            // zur überprüfung geben wir uns das neue Car in der konsole aus
            console.log(newCar);

            // Wie wir sehen bekommen wir alle daten im richtigen datentypformat zurück (z.B.: ist year jetzt eine nummer), auch unsere defaults wurden angelegt, falls wir welche haben.

            // um einen neuen eintrag jetzt in die datenbank einzufügen, nutzen wir die methode .save(); und können hier, bei erfolg oder fehler etwas zurückgeben

            newCar
            .save()
            .then(doc => {
                res.status(201).json({
                    success: true,
                    data: doc
                });
            })
            .catch(err => {
                res.status(400).json({
                    success: false,
                    message: err.message
                });
            })
        })
    } catch (err) {
        console.log(err.message);
    }
});

// GET /cars/ - alle einträge auflisten
app.get('/cars/', async (req, res) =>
{
    try {
        // um alle einträge zu finden, nutzen wir die modell methode .find();
        connect().then(async (db) =>
        {
            Car
            .find({})
            .then(docs => {
                res.status(200).json({
                    success: true,
                    data: docs
                })
            })
            .catch(err => {
                res.status(404).json({
                    sucess: false,
                    message: err.message
                })
            })
        })
    } catch (error) {
        console.log(err.message);
    }
});

// GET /cars/:id - einen eintrag anhand eines filters anzeigen
app.get('/cars/:id', async (req, res) =>
{
    // wir holen uns die id aus den params
    const { id } = req.params;

    try {
        connect().then(async (db) => {
            // wir nutzen die methode .findOne(); um einen spezifischen eintrag anhand unseres gewünschten filters zu bekommen, der code bleibt bei all diesen angelegten datenbankaufrufen einigermaßen gleich.
            Car
            .findOne({ _id: id })
            .then(doc => {
                res.status(200).json({
                    success: true,
                    data: doc
                });
            })
            .catch(err => {
                res.status(404).json({
                    success: false,
                    message: err.message
                })
            })
        })
    } catch (err) {
        console.log(err.message)
    }
});

// PUT /cars/:id - einen eintrag anhand seiner ID verändern
app.put('/cars/:id', async (req, res) =>
{
    const { id } = req.params;

    try {
        connect().then(async (db) => {

            // es gibt verschiedene möglichkieten, ein dokument zu verändern. Wenn wir das dokument anhand der ID suchen, goibt es dafür speziell eine eigene methode namens .findByIdAndUpdate(); die das dokument sucht, und wenn gefunden, angefügte daten direkt einfügen kann.
            
            // wir nutzen diesmal als beispiel allerdings wieder .findOne(); um spezifisch das dokument zu finden das wir suchen, und speichern die neuen informationen ab.
            
            Car
            .findOne({ _id: id })
            .then(doc => {
                // wir holen die daten vom gefundenen fahrzeug und fügen sie direkt ein

                doc.brand = req.body.brand || doc.brand;
                doc.name = req.body.name   || doc.name;
                doc.type = req.body.type   || doc.type;
                doc.year = req.body.year   || doc.year;

                doc.save()
                .then(doc => res.status(200).json({
                    success: true,
                    newData: doc,
                }))
                .catch(err => res.status(400).json({
                    success: true,
                    message: err.message
                }));
            })
            .catch(err => console.log(err))
        });
    } catch (err) {
        console.log(err.message); 
    }
});

// DELETE /cars/:id - einen eintrag anhand seiner ID löschen
app.delete('/cars/:id', async (req, res) =>
{
    const { id } = req.params;

    try {
        connect().then(async (db) => {
            // wir nutzen die methode .deleteOne(); um spezfisch das erste gefundene dokument zu löschen
            Car
            .deleteOne({ _id: id })
            .then(doc => {
                res.status(200).json({
                    success: true,
                    message: "Dokument wurde gelöscht"
                })
            })
            .catch(err => {
                res.status(404).json({
                    success: false,
                    message: err.message
                })
            })
        })
    } catch (err) {
        console.log(err.message);
    }
})

app.listen(port, () => {
    console.log(`Server läuft auf port ${ port }`);
});
