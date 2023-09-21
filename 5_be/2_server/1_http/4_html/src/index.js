// Wir importieren das modul dotenv
require('dotenv').config();

// Wir importieren das modul http:
const http = require('http');

// Wir importieren das module fs (FILE-SYSTEM)
const fs = require('fs');

// wir holen uns den port für unsere server applikation aus der .env datei:
const port = process.env.PORT;

// wir erstellen ein server objekt, und können dort unsere antworten eingeben, wir können das server objekt auch direkt als chained-function mit dem listener ausstatten.
http
.createServer((req, res) =>
{
    // wir erstellen einen switch für die pfadangabe:
    switch(req.url)
    {
        // auf der homepage wollen wir unsere seite anzeigen
        case "/":
            // wir nutzen .readFile(); um die html datei einzulesen, die wir ausgeben wollen:
            fs.readFile('./public/index.html', (err, content) => {
                // wenn die datei nicht gefunden wurde, wollen wir einen fehler ausgeben
                if(err) throw err;

                // wir zeigen die gefundene html datei an
                res.writeHead(200, { "Content-Type": "text/html" });
                res.write(content);
                res.end();
            });
            break;
    
        // da wir eine css datei haben, müssen wir auch diese mit fs laden:
        case "/style.css":
            fs.readFile('./public/style.css', (err, content) =>
            {
                if(err) throw err;

                // wir setzen den typ des inhaltes auf text/css
                res.writeHead(200, { "Content-Type": "text/css"});
                res.write(content);
                res.end();
            });
            break;

        // Falls besucher sich auf einen pfad bewegen, den es nicht gibt, geben wir eine 404 fehlerseite an
        default:
            fs.readFile('./public/404.html', (err, content) =>{
                if(err) throw err;

                // Bei der fehlerseite geben wir den statuscode 404 an, da dieser aussagt, das die seite nicht gefunden wurde
                res.writeHead(404, { 'Content-Type': "text/html"});
                res.write(content);
                res.end();
            });
    }
})
.listen(port, () =>
{
    console.log(`Server läuft auf port ${port}`);
})