/* 
    wenn wir in unseren express applikationen import/export, anstelle von require(); nutzen wollen, müssen wir in der package json die zeile
    "type": "module",
    hinzufügen, und können dann hier mit express wie folgt arbeiten:

    import express from 'express';
    import path from 'path';
*/

// Wir importieren das modul "express":
const express = require('express');

// wir importieren das modul "path":
const path = require('path');

const app = express();

// wir nutzen eine middleware um den ordner anzugeben, in dem wir unsere statischen dateien laden wollen, wir geben ausserden an, wie dieser ordner innerhalb unserer applikation erreichbar sein soll. Damit nicht jede datei als html datei geladen wird, müssen wir express noch mitteilen, das er nicht immer die index datei laden soll.
// wie er heissen solll,          wo er zu finden ist.
app.use("/static", express.static("public", { index: false }));
// wir holen die daten aus dem order "public" und bieten sie dem client unter dem pfad "static" an.

const port = 3000;

// mit app.get(); erstellen wir einen controller für die methode "GET", ein controller ist eine methode, 
// die requests und responses bearbeiten kann, dort wichtigen programmcode ausführt, 
// der mit der anfrage an den server zutun hat, so sind alle programminhalte, 
// die mit dieser anfrage zutun haben an einem platz zu finden, innerhalb des callbacks von .get();. 
// Dies ist ordentlicher zu lesen, einfacher zu verstehen und serh viel besser zu warten.

// Ein simpler GET request, auf root "/". Zum testen. Dieser ist erreichbar auf der adresse "localhost:3000".
app.get("/", (req, res) => {
    // wir können uns das request objekt und das response objekt ausgeben lassen:
    // console.log(req);

    // Wenn wir uns das request objekt ausgebn lassen, sehen wir dort interessante informationen, wie zum beispiel
    console.log(req.url); // die aufgerufene URL
    console.log(req.method); // die benutzte methode

    // wir können uns auch das response objekt ausgeben lassen:
    console.log(res);

    // Wir senden eine antwort mit res.send(); und fügen vorher noch den status mit ein. Wir müssen IMMER eine antwort senden, weil der client sonst einfriert.
    res.status(200).send("Hallo Welt!");
});

// ein GET request an einen anderen pfad:
app.get("/hallo", (req, res) => {
    // mit req.url knnen wir den ajtuellen pfad ausgeben lassen:
    console.log("Aktueller Pfad:", req.url);

    // wir können die response mit .json(); auch direkt als json zurückggeben, dies ist sehr gut geeignet wenn wir apis entwickeln.
    res.status(200).json({ hallo: "welt" });
});

// /user/Max => auf der seite stehen die infos von Max
// /user/Dirk => auf der seite stehen die infos von Dirk
// Bei einem request in express können wir auch pfadinhalte als parameter übergeben, so etwas haben wir bei react-router schon einmal gesehen.
app.get('/user/:id/', (req, res) => {
    // die parameter bekommen wir im objekt req.params, mit deconstructuring können wir uns die richtigen daten aus dem objekt holen.
    const { id } = req.params;

    // wir können uns die user id anhand der URL als string als ganz einfach ausgeben lassen:
    console.log("USER:", id);

    // wir schreiben jetzt also zb auf die url localhost:3000/user/yan
    const users = [
        {
            name: "Dirk",
            isAdmin: true,
        },
        {
            name: "Max",
            isAdmin: false
        }
    ];

    const currentUser = users.filter(user => user.name === id);

    // wir schreiben die daten auch in die antwort:
    res.status(200).json(currentUser[0]);
});



// Express gibt uns die möglich dateien direkt zu laden:
app.get("/home", (req, res) =>
{
    // Wenn wir zum beispiel eine html datei laden wollen, um eine webseite anzuzeigen, nutzen wir dazu die response methode .sendFile();, sie sendet bei der antwort, die gewünschte statische datei an den client zurück.

    // mit path.join(); fügen wir den aktuellen pfad und die gewünschte datei zusammen, und können so auf unseren public ordner zugreifen und die html datei laden:
    res.status(200).sendFile(path.join(__dirname, '../public/index.html')); // __dirname ist eine umgebungsvariable, die den pfad, in dem die javascript datei ausgeführt wird zurückgibt.

    // Wie wir sehen, können wir zwar einzelne dateien anzeigen lassen, aber unser stylesheet wird nicht geladen, im gegensatz zu http, wo wir jetzt jede datei einzeln einladen müssen, können wir mit middleware in express einne satischen ordner angeben, aus dem all unsere inhalte, sowohl html, css, wie auch js dateien oder bilder ausgeliefert werden sollen.
});

// Wir rufen die methode .listen(); auf, um dem server zu sagen, er soll auf der spezifizierten adresse auf anfragen warten.
app.listen(port, () => {
    console.log(`Der server läuft auf port ${port}`);
});