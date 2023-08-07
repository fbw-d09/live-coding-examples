// Wir importieren das nodejs interne modul "http":
const http = require('http');

// Wir setzen einen port fest auf dem wir den server laufen lassen wollen:
const port = 3000;

// wir schreiben ein server objekt, mit http.createServer(); erstellen wir einen server, mit den benötigten daten
const server = http.createServer((request, response) =>
{
    // request = die anfrage an den server
    // response = die antwort vom server

    // wir können uns die request und response objekte ausgeben-

    // wir können überprüfen, welcher pfad (url) und welche methode angefragt wurde
    console.log("URL:", "http://localhost:" + port + request.url);
    console.log("METHODE:", request.method);

    console.log(response);
    
    // wir setzen fest, das der inhalt der angezeigt werden kann (Statuscode 200) normaler text ist:
    response.writeHead(200, { 'Content-Type': "text/plain"}); // bei status 200 wird normaler text ausgegeben

    // Wir geben an, welchen inhalt wir ausgeben wollen:
    response.write("Hallo, Ich bin ein server!"); // Die antwort schreibt "Hallo Welt"

    // wir beenden die kommunikation zwischen server und client
    response.end(); // beende die antwort

});

// wir sorgen mit der methode .listen(); dafür, das der server auf dem angegebenen port auf anfragen hört.
server.listen(port, () => {
    console.log(`Server läuft auf port ${port}`);
});
