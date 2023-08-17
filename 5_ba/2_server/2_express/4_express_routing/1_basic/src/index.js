// wir initialisieren ein neues Express projekt: npm init -y && npm i express body-parser dotenv && mkdir src && touch .env .env.template .gitignore src/index.js 

/**
 * Routing in express gibt uns mehrere möglichkeiten routen (pfade) festzulegen, zu sortieren und einfacher zu managen. Wir haben die möglichkeit mehrere methoden auf den selben pfad zu legen, was in CRUD (CREATE, READ, UPDATE, DELETE) anwendungen standardmäßig gemacht wird.
 * produktionsrelevante CRUD anwendungen haben also NICHT routen wie z.b.:
 * 
 * - POST       /todo/create                für das erstellen von inhalten
 * - GET        /todo/all                   für das anzeigen von allen inhalten
 * - PUT        /todo/:id/update            für das updaten von inhalten
 * - DELETE     /todo/:id/delete            für das löschen von inhalten
 * 
 * sondern so:
 * - POST       /todos                      für das erstellen von inhalten
 * - GET        /todos                      für das anzeigen von allen inhalten
 * - GET        /todos/:id                  für das anzeigen eines spezifischen inhaltes
 * - PUT        /todos/:id                  für das updaten von spezifischen inhalten
 * - DELETE     /todos/:id                  für das löschen von inhalten
 * 
 * da wir verschiedene methoden auf den selben pfad legen können, ist so eine strukur sehr einfach anzulegen
 */

// wir importieren express
const express = require('express');

// wir legen eine instanz von express auf die variable app;
const app = express();
const port = 3000;

// 1. MEHRERE METHODEN AUF DER SELBEN ROUTE
// wenn wir, wie wir es bisher gelernt haben, eine route anlegen, müssen wir für jede einzelen route eine methode in unserer express app aufrufen:
app.get("/", (req, res) => {
    // wir senden eine antwort
    res.status(200).send("GET: Hallo GET");
});

app.post("/", (req, res) => {
    res.status(200).send("POST: Hallo POST");
});

// 2. METHOD CHAINING
// express hat eine methode namens .route(); die dafür sorgt, code wiederholungen zu verhindern, und das management von routen zu erleichtern. Anstelle das wir in .get(); und .post(); den pfad angeben, den wir auslesen wollen, geben wir ihn in der methode .route(); an, und rufen für diesen pfad .get();, .post(); und so weiter, nur mit dem callback auf.
app.route('/test')
// die GET methode für unsere route "/test"
.get((req, res) => {
    res.status(200).send("GET /test");
})
// die POST methode für unsere route "/test"
.post((req, res) => {
    res.status(200).send("POST /test");
});

// Wir können, wie wir sehen, verschidene methoden auf der selben url ausführen, und die dann auch sehr übersichtlich und DRY schreiben, wenn wir .route(); dafür nutzen.

// 3. MEHRERE CALLBACKS AUF EINER METHODE/ROUTE

// wir können nicht nur verschiedene methoden auf der selben URL ausführen, sondern auch mehrere callbacks au der selben methode ausführen, die hintereinander abgearbeitet werden.

// wir schreiben 3 funktionen, die wir in die methode als callback übergeben
const callback1 = (req, res, next) => {
    console.log("Das hier passiert als erstes");

    // wir müssen next(); übergeben, damit die nächste funktion ausgeführt wird
    next();
}

const callback2 = (req, res, next) =>
{
    console.log("Das hier passiert als zweites");

    next();
}

const callback3 = (req, res, next) => {
    console.log("Das hier passiert als drittes");

    // hier senden wir unseren status und unsere antwort
    res.status(200).send("Es hat geklappt!");

    // hier müssen wir kein next(); übergeben, da dies das ende unseres requests ist.
}

app.get("/hallo", [ callback1, callback2, callback3 ]);

// 4. ERROR ROUTE
// um eine "fehlerseite" mit express zu erstellen, nutzen wir app.use(); ohne route, am ende unserer routen, und erstellen so, wie in react, eine "übrige" seite, die sagt "alles was wir nicht angegeben haben, wirft eine fehlerseite".

// wir erstellen eine middleware, zum übergeben des fehlers
app.use((req, res, next) =>
{
    const error = new Error("Not Found");
    error.status = 404;
    next(error);
})

// wir erstellen eine middleware zur ausgabe des fehlers
app.use((err, req, res, next) => {
    res.status(err.status);
    res.send({
        error: {
            message: err.message
        }
    })
});

// einfacher:
/*
    app.use((req, res, next) => {
        res.status(404).send("Not Found");
    });
*/

// gutes modul für statuscodes: https://github.com/prettymuchbryce/http-status-codes

app.listen(port, () => console.log("Server läuft auf", port));