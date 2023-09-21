require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const User = require('./models/User.js');

const app = express();
const port = process.env.PORT;
const databaseUrl = `${ process.env.DB_URL }/${ process.env.DB_NAME }`;
const db = mongoose.connect(databaseUrl);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Die standardmäßigen kommandos in mongoose um CRUD operationen auszuführen, also CREATE, READ, UPDATE, DELETE sind einfach zu nutzen, und bieten eine menge optionen und verschiedene wege, sie anzusprechen. Sie basieren auf filtern, mit denen wir dokumente per ID oder durch spezifische werte finden können, und dann an dem oder den gefundenen dokumenten unsere operationen ausführen können.

// Wenn wir dokumente in unserer datenbank finden wollen, haben wir dafür auf modell ebene, einige möglichkeiten, die sogenannten "Filter methoden".

// READ

// Bei einer suche nutzen wir immer die HTTP methode GET

// ALLE EINTRÄGE FINDEN
// mit Model.find(); ohne weitere angaben können wir alle einträge innerhalb einer kollektion finden, die im modell referenziert wurde:
app.get('/users/', (req, res) => {
    User
    .find()
    .then(users => {
        // wir bekommen alle einträge zurück, und können sie anhand der variable "users", oder "docs", oder wie wir sie auch immer nenne wollen (mehrzahl) aus dem callback übernehmen.
        res.status(200).json(
            {
                success: true,
                amount: users.length,
                data: users
            }
        )
    })
    .catch(err => console.log(err.message));
});

// SPEZIFISCHE EINTRÄGE FINDEN
// wir können spezifische informationen mit Model.find(); suchen, indem wir suchoptionen in ein objekt übergeben, und alle gefundenen ergebnisse ausgeben.
app.get('/users/admins', (req, res) => {
    User
    .find({ role: 'admin' })
    .then(admins => {
        res.status(200).json({
            success: true,
            amount: admins.length,
            data: admins
        })
    })
    .catch(err => console.log(err.message));

    // wie wir sehen, bekommen wir jetzt eine andere anzahl in "amount" angezeigt, da wir nun die einträge filtern, die die rolle "admin" haben. Wenn wir keinen eintrag gefunden haben, bekommen wir ein leeres array zurück.

    // WICHTIG: ein filter, der nicht funktioniert, weil der schlüssel nicht existiert, gibt ALLE ergebnisse zurück.
});

// SPEZIFISCHE EINTRÄGE MIT MEHREREN FILTERN FINDEN:
// wir können auch mehrere informationen bei Model.find(); filtern, und bekommen dann die dokumente zurück, bei denen alle suchkriterien zutreffen.
app.get('/users/someone', (req, res) => {
    User
    .find({ role: 'admin', age: 51 })
    .then(users => {
        res.status(200).json({
            success: true,
            amount: users.length,
            data: users
        })
    })
    .catch(err => console.log(err.message));
});

// EINZELNES DOKUMENT FINDEN
// um nicht mehrere, sondern nur einen, nämlich den ersten gefundenen eintrag mit dem gesuchten wert zu finden, nutzen wir die methode Model.findOne();
app.get('/users/person1', (req, res) => {
    User
    .findOne({ username: 'Eric' })
    .then(user => {
        // wenn wir nur einen eintrag suchen, nutzen wir laut konvention NICHT die mehrzahl als variablennamen (users/docs), sondern die einzahl (user/doc)
        res.status(200).json({
            success: true,
            data: user
        });
    })
    .catch(err => console.log(err.message));

    // wie wir sehen, bekommen wir jetzt ein objekt in data zurück, kein array mit nur einem eintrag. Wenn nichts gefunden wurde, bekommen wir hier "null" zurück, sollte der gesuchte schlüssel nicht existieren, bekommen wir das erste gefundene dokument in der kollektion zurück.
});

// EIN DOKUMENT ANHAND DER ID FINDEN
// um direkt nach einem dokument anhand seiner ID in mongodb zu suchen, anstelle zum beispiel Model.findOne({ _id: "..." }): zu nutzen, gibt es den befehl Model.findById();
app.get('/users/direkteId', (req, res) => {
    const id = "64e3f2cb5f4cd87459f8b8b4";

    // wir können mit mongoose auch vor der prüfung herausfinden, ob eine ID valide ist, indem wir die methode mongoose.isValidObjectId(); nutzen
    const isValid = mongoose.isValidObjectId(id);

    if(!isValid)
    {
        res.status(400).json({
            success: false,
            message: "hier ist was kaputt"
        })
    }
    else
    {
        User
        .findById(id)
        .then(user => {
            if(user === null)
            {
                res.status(400).json({
                    success: true,
                    message: "No Entries found"
                })
            }
            else
            {
                res.status(200).json({
                    success: true,
                    data: user
                })
            }
        })
    }

    // wir bekommen hier spezifisch ein dokument als objekt zurück, das wir per ID gesucht haben. Sollte das dokument mit der ID nicht existieren, bekommen wir "null" zurück.

    // Sollte die ID allerdings NICHT im 12 bit format sein (das standard ID format für mongodb) bekommen wir einen error.

    /*
        das 12 bit oder auch 24 hex format, ist eine string kodierung, die in 12 bits, also 24 hexadezimalnummern eingeteilt ist:
        1  2  3  4  5  6  7  8  9  10 11 12
        ff 14 46 00 b9 d1 68 99 74 93 e1 ee
    */
});

// ERWEITERTE QUERY METHODEN

// abgesehn von den typischen filtern, gibt es auch noch ein paar weitere methoden, mit denen wir direkt befehle ausführen können, wenn wir das gesuchte dokument gefunden haben

// > UPDATE

// EIN DOKUMENT SUCHEN UND VERÄNDERN
app.put('/users/updateOne', (req, res) => {
    // um werte innerhalb eines dokumentes zu ersetzen oder zu ändern, können wir die HTTP methode PUT nutzen, da wir änderungen, also updates machen

    // wir finden mit ...One(); befehlen immer den ersten gefundenen inhalt, wenn es also mehrere dokumente mit diesen werten gibt, wurde nur das erste angesprochen.

    // mit Model.findOneAndUpdate(); können wir ein spezifisches dokument suchen, und dort änderungen vornehmen.

    User
    .findOneAndUpdate({ username: 'Eric' }, 
    // in einem neuen objekt, direkt nach der suchanfrage, geben wir unsere daten an, und nur diese werden überschrieben
    { 
        age: 35
    },
    // in einem weiteren objekt können wir optionen angeben
    {
        new: true, // wenn wir diese option nicht setzen, bekommen wir im callback das unveränderte dokument zurück, mit dieser optionen können wir dem benutzer also das veränderte dokument, oder die veränderten daten übergeben.
        upsert: true, // sollte das gesuchte dokument nicht existieren, wird es mit dem upsert befehl erstellt, upsert bedeutet "erstelle bei update".
        overwrite: false, // sollten wir den overwrite befehl auf true setzen, werden ALLE daten aus dem dokument überschrieben, und nur die aus dem update objekt angegebenen werte übernommen
    })
    .then(user => {
        res.status(200).json({
            success: true,
            // wir erstellen einen key, in dem ausgeben, das daten geändert wurden
            updated: user !== null ? true : false,
            data: user
        });
    });
});

// EIN DOKUMENT AUF BASIS DER ID SUCHEN UND ÄNDERN
app.put('/users/updateById', (req, res) => {
    // mit Model.findByIdAndUpdate(); suchen wir ein dokument anhand seiner ID und updaten dann die daten. Hier gelten die selben optionen wie bei .findOneAndUpdate();
    User
    .findByIdAndUpdate("64eef2cb5f4cd87459f8b8b2",
    {
        role: "admin"
    },
    {
        new: true
    })
    .then(user => {
        res.status(200).json({
            success: true,
            updated: user !== null ? true : false,
            data: user
        });
    });
});

// MEHRERE DOKUMENTE VERÄNDERN
app.put('/users/updateMany', (req, res) => {
    // um mehrere dokumente auf einmal zu ändern, können wir die methode Model.updateMany(); nutzen:
    User.updateMany({ role: "admin" },
    {
        age: 12
    },
    {
        new: true
    })
    .then(data => {
        res.status(200).json({
            sucess: true,
            data: data
        })
    });
});

// EIN DOKUMENT ERSETZEN
app.put('/users/replace', (req, res) =>
{
    // um ein komplettes dokument zu ersetzen, nicht nur die werte auszutauschen, können wir die methode Model.findOneAndReplace(); nutzen, hier gibt es kein "FindById" parameter, nur "One", da wir die ID des dokumentes ersetzen, und dies zu problemen führen könnte
    User
    .findOneAndReplace({ username: "Berat" },
    {
        role: "admin",
        username: "Berat",
        age: 34,
        email: "hallo@welt.de",
        password: "test1234",
        country: "mars",
        job: "Web-Dev"
    })
    .then(user => {
        res.status(200).json({
            success: true,
            replaced: user !== null ? true : false,
            data: user
        });
    });

    // wie wir sehen, wird auch hier der komplette inhalt überschrieben, es macht laso sinn, das wir tatsächlich ALLE inhalte des dokumentes hier neu angeben, mit dem wir das gefundene dokument ersetzen wollen.
});

// > DELETE

// für löschaktionen nutzen wir die HTTP methode DELETE

// wenn wir dokumente löschen wollen, können wir dafür methoden nutzen, die das dokument suchen und dann das gefundene ergebnis löschen. Hierbei gibt es zwei verschiedene schreibweisen (DELETE und REMOVE), die beide in mongoose das selbe machen... oberflächlich gesehen.
// sie unterscheiden sich nur in ihrer nutzung auf shell ebene (also mongosh), sie können in mongoose aber absolut austauschbar benutzt werden.

// EIN DOKUMENT FINDEN UND LÖSCHEN
app.delete('/users/deleteOne', (req, res) => {
    // mit Model.findOneAndDelete(); oder Model.findOneAndRemove(); suchen wir ein dokument, und löschen dieses, dabei können wir uns das gelöschte dokument im callback ausgeben lassen.
    User
    .findOneAndDelete({ username: 'Vincent' })
    .then(user => {
        res.json({
            success: true,
            deleted: user !== null ? true : false,
            data: user
        });
    });
});

// EIN DOKUMENT ANHAND SEINER ID FINDEN UND LÖSCHEN
app.delete('/users/deleteById', (req, res) => {
    // in produktion würden wir diese methode MEIST verwenden, und uns die ID aus den params / body übergeben lassen.

    User
    .findByIdAndDelete("64eef2cb5f4cd87459f8b8b0")
    .then(user => {
        res.json({
            success: true,
            deleted: user !== null ? true : false,
            data: user
        });
    });
});

// MEHRERE DOKUMENTE LÖSCHEN
app.delete('/users/deleteMany', (req, res) =>
{
    // Mit Model.deleteMany(); können wir anhand von suchparametern mehrere dokumente löschen
    User
    .deleteMany({ role: "member" })
    .then(data => {
        res.json({
            success: true,
            deleted: data !== null ? true : false,
            data: data
        })
    });
});

app.listen(port, () => console.log("Server läuft auf port", port));
