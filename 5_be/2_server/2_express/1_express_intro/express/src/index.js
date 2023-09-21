// Wir importieren das modul express, das wir vorher mit "npm install express" installiert haben:
const express = require('express');

// Wir importieren das modul body-parser, das wir vorher mit "npm install body-parser" installiert haben, 
// damit wir den body in post requests auslesen können:
const bodyParser = require('body-parser');

// wir importieren das nodejs modul path, um mit pfaden auf dem system arbeiten zu können:
const path = require('path');

// Wir setzen eine express instanz auf eine variable, in der standardkonvention heisst diese "app":
const app = express();

// wir sagen express, es soll als "middleware" (also interceptoren oder hooks, einhakend in den programmverlauf) den body-parser nutzen, um die daten der url zu dekodieren, die standardeinstellung { extended: true } wird dabei immer angegeben:
app.use(bodyParser.urlencoded({ extended: true }));

// damit express auch json lesen kann, falls wir mal ein frontend bauen das mit axios oder fetch arbeitet, könenn wir ausserdem noch die bodyParser middleware .json(); hinzufügen um json zu dekodieren
app.use(bodyParser.json());

// auch hier setzen wir den port fest:
const port = 3000;

// BEISPIEL: GET

// um informationen an einen get request zu übergeben, können wir direkt die methode .get(); nutzen, ähnlich wie bei axios, in der wir den pfad angeben, auf dem wir unsere informationen übergeben wollen
app.get("/", (req, res) =>
{
    // Header informationen setzen wir mit .set(); und fügen sie in ein objekt ein
    res.set({ "Content-Type": "text/plain"});
    
    // Wir übergeben unsere gewünschte information an die methode .send(); oder .json(); und können mit .status(); unseren statuscode übergeben.
    res.status(200).send("Hallo Express!");
});

// Eine seite mit express anzeigen
app.get("/seite", (req, res) =>
{
    // Mit .sendFile(); können wir dateien angeben, die wir senden wollen:
    res.status(200).sendFile(path.join(__dirname, '../public/index.html'));
});

// Beispiel: POST

// express hat auch eine eingebaute middleware um json dateien zu laden
app.use(express.json());

// ein post request schrieben wir mit der methode .post();
app.post("/test", (req, res) =>
{
    // jetzt können wir daten ausgeben, ohne zu umwandeln zu müssen, oder aus dem buffer zu holen
    console.log(req.query);

    res.send(req.query);
});

app.post("/test2", (req, res) =>
{
    // jetzt können wir daten ausgeben, ohne zu umwandeln zu müssen, oder aus dem buffer zu holen
    console.log(req.body);

    const { name } = req.body;

    res.send(name);
});

// UM eine selbstgemachte 404 fehlerseite anzuzeiogen, übergeben wir als LETZTEN PFAD ein anonymes callback an app.use(); als middleware und geben dort den statuscode und den gewünschten inhalt an:
app.use((req, res, next) =>{
    // next können wir verwenden, um nach dem aufruf von middleware unsere request und response objekte weiterzugeben.

    // wir übergeben den statuscode 404 und senden eine nachricht
    res.status(404).send("ERROR: SEITE NICHT GEFUNDEN");
});

// auch hier ufen wir eine methode namens .listen(); auf, um den server zu sagen er soll auf einem spezifischen port zuhören:
app.listen(port, () => {
    console.log(`Server läuft auf port ${ port }`);
});
