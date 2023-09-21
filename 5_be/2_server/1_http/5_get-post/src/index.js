require('dotenv').config();
const http = require('http');
const fs = require('fs');

const port = process.env.PORT;

// zur vereinfachung des codes, und um wiederholungen zu vermeiden, schreiben wir eine funktion, zum laden von dateien.
const parseFile = (res, filename, filetype, statuscode = 200) =>
{
    // wir übergeben den dateienamen dynamisch an .readFile();
    fs.readFile(`./public/${ filename }`, (err, content) =>
    {
        if(err) throw err;

        // wir übergeben den filetype dynamisch, und holen uns res von http:
        res.writeHead(statuscode, { 'Content-Type': filetype });
        res.write(content);
        res.end();
    });
}

const server = http.createServer((req, res) =>
{
    let data = '';

    // wenn wir nicht nur GET, sondern auch POST requests behandeln wollen, müssen wir den wert von req.method auswerten.

    // wenn die methode GET ist:
    if(req.method === "GET")
    {
        // unsere routen für die methode GET
        switch(req.url)
        {
            case "/":
                parseFile(res, "index.html", "text/html");
                break;
            
            case "/style.css":
                parseFile(res, "style.css", "text/css");
                break;

            default:
                parseFile(res, "404.html", "text/html", 404);
                break;
        }
    }
    // Wenn die methode POST ist:
    else if(req.method === "POST")
    {
        switch(req.url)
        {
            case "/signup":

                // Beim bekommen von daten, feuern wir das event "onData" ab, und fügen die daten zum data body hinzu:
                req.on('data', (chunk) => {
                    data += chunk;
                });

                // wenn die daten fertig durchgegangen wurden, zeigen wir unser ergebnis an:
                req.on("end", () =>
                {
                    // Wir ersetzen bestimmte pfadstrukturen mit anderen inhalten, damit wir das ganze lesen können
                    console.log(data);

                    const newData = data.replace("+", " ").split("&");

                    const splitKeysData = newData.map(data => data.split("="));

                    const dataJson = Object.fromEntries(splitKeysData);

                    console.log(dataJson);

                    res.setHeader('Content-Type', "application/json");
                    res.end(JSON.stringify(dataJson));
                });
 
                break;
        }
    }
});

server.listen(port, () => console.log(`Server läuft auf port ${ port }`));