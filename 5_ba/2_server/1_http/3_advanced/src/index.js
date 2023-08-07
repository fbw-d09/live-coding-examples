// wir importieren dotenv:
require('dotenv').config();

// wir importieren http:
const http = require('http');

// wir importieren ausserdem, damit wir mal eine datei ausgeben können das modul "fs" (File-System).
const fs = require('fs');

const server = http.createServer((req, res) => {
    switch(req.url)
    {
        case "/datei":

            // wir erstellen eine datei namens testfile.txt, dessen text wir ausgeben wollen, und nutzen fs (File-System) um den inhalt der datei im browser auszugeben.

            // fs.readFile(); wird genutzt um dateien zu lesen, wir lesen die testDatei aus, und können im callback dann die inhalte auf der seite ausgeben.
            fs.readFile('./testfile.txt', "utf-8", (err, content) => {
                // falls die datei nicht gefunden wurde, zeigen wir einen fehler an:
                if(err)
                {
                    res.writeHead(404);
                    res.write("ERROR: Datei nicht gefunden!");

                    console.log(err);
                }

                res.write(content);
                res.end();
            });

            break;
    }
});

// jetzt legen wir unsere .listen(); methode an, in der wir den port aus der env datei nutzen, um diesen dynamisch anzubieten.
server.listen(process.env.PORT, () => {
    console.log("Der server läuft auf port " + process.env.PORT);
});
