// Express bietet uns sogenannte middleware, methoden mit denen wir optionen in unsere express app aufrufe einbinden können. Ähnlich wie bei hooks in react oder interceptoren in axios, werden sie während des lebenszyklusses eines requests eingebunden. Jede middlware hat zugriff auf die HTTP requests und responses zu jeder route, zu der sie hinzugefügt werden. Express selbst basiert komplett auf diesem system. also sind alle funktionen von express als middleware eingebunden, und deswegen sehr anpassbar. Middleware kann miteinander verbunden werden, und so eine ganze reihe an dingen kontrollieren, oder mithilfe der methode .next(); diese informationen auch weitergeben.

// middleware wird immer vor/über den routen definiert, oder spezifisch für routen, als zweiter parameter angegeben.

// wie immer importieren wir express und legen eine instanz an:
const express = require('express');
const rateLimit = require('express-rate-limit');

// wir importieren unsere selbstgeschriebene middleware:
const { middlewareBeispiel } = require('./middlewares/middlewareBeispiel');

const app = express();

const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers,
    message: "ZU VIELE ANFRAGEN, GEH WEG!"
})

// .get(); ist eine middlware auf applikationslevel, sie ist also teil von express, sie nutzt die parameter req, und res, und, wie erwähnt optional .next();.
// Die eingehenden anfragen werden verarbeitet, die antwort wird geschrieben und dann wir next(); ausgeführt, um die nächste middleware aufzurufen. sobald die aktuelle middleware fertig ist.

// wir können middleware in express mit der methode .use(); auch global definieren, so wird sie für jede route und jeden request aufgerufen. sofern sie oberhalb der angegebenen route definiert wurde.
app.use((req, res, next) => {
    // wir loggen das req objekt für jeden aufruf
    console.log(req);

    // wir sagen mit next(); es soll die informationen weitergeben.
    next();

    // bei jedem aufruf eines requests, wir diese middleware jetzt verwendet.
});

app.use(limiter);

// middleware wird nach dem pfad, und vor dem callback aufgerufen
app.get("/middleware1", middlewareBeispiel(), (req, res) => {
    console.log("Hallo!")
    res.send("Hello Middlware");
});

app.get("/middleware2", (req, res) => {
    console.log("Anderer request");
    res.send("Hello Middleware 2");
})

// express liefert auch vorgefertigte middleware, die wichtig ist, wenn wir bestimmte optoonne für unsere applikationen bereitstellen wollen, zum beispiel express.json(); mt dem es möglich ist, ankommende requests in json zu senden, oder wenn wir cors(); einbinden, um cross-origin requests zuzulassen oder zu unterbinden, express.static(); ist wichtig, damit wir statische daten wie css oder zum beispiel bilder oder webseiten an requests übergeben können, diese middlewares bilden die basis für full stack anwendungen, die mit express laufen.

app.listen(3000, () => console.log("Server läuft auf port 3000"));
