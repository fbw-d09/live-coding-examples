// Wir importieren das modul http:
const http = require('http');

// Wir setzen einen port fest, auf dem der server laufen soll:
const port = 3000;

// Wir schreiben das server objekt:
const server = http.createServer((req, res) =>
{
    // für das speichern von daten aus dem post request, erstellen wir eine variable
    let data = "";

    // Beispiel: GET

    // Wir müssen einige abfragen eingeben, für welche methode und welchen pfad wir unsere informationen angeben wollen:
    if(req.method === "GET" && req.url === "/")
    {
        // Wir setzen den inhaltstyp unserer informationen fest:
        res.writeHead(200, { "Content-Type": "text/plain"});

        // Wir übergeben inhalt, den wir auf der seite als antwort anzeigen wollen:
        res.write("Hallo Welt!");

        // Wir beenden die kommunikation zwischen server und client:
        res.end(); // alternativ ginge auch res.end("Hallo Welt!");
    }

    // Beispiel: POST

    else if(req.method === "POST" && req.url === "/test")
    {
        // Sobald wir daten bekommen, müssen wir das event onData verwenden, um die daten aus chunks zusammenzufügen
        req.on("data", (chunk) =>
        {
            data += chunk;
        });

        // erst wenn das event onEnd durchlaufen ist, können wir mit unseren daten arbeiten
        req.on("end", () =>
        {
            console.log(data);

            // wir können die antwort zurückgeben
            res.writeHead(200, { "Content-Type": "text/plain" });
            res.end(data);
        });
    }
});

// Wir rufen die methode .listen(); auf, um den server loop zu starten, der auf anfragen wartet
server.listen(port, () => {
    console.log(`Server läuft auf port ${ port }!`);
})
