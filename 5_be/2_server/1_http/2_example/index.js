// Einen rudimentären server, können wir mit nodejs internen modulen erstellen, ohne etwas mit npm installieren zu müssen. Wir lernen später expressJS kennen, das standardmodul für web anwendungen mit nodejs, aber vorher lernen wir die basics ohne expressJS.

// Wir importieren das modul http, das uns methoden für http requests und responses zur verfügung stellt.
const http = require('http');

const port = 3000;

//wir erstellen eine variable namens server, die http methode http.createServer(); erschafft ein objekt , das die basis für unsere server applikation bildet.

// in .createServer(); können wir requests und responses als callback übergeben, die gängige abkürzung hierfür in der produktion sind "req" (request) und "res" (response).
const server = http.createServer((req, res) =>
{
    // Den inhalt des server objektes schreiben wir am besten, nachdem wir server.listen(); ausgeführt haben, damit wir sofort sehen können, was wir im objekt schreiben.

    // mit einem switch können wir verschiedene pfade auf unserem server ausgeben, diese finden wir im request objekt unter .url;
    switch(req.url)
    {
        // als erstes wollen wir unsere home adresse ansprechen, also "/":
        case "/":
            // mit der response methode .write(); schreiben wir die antwort, die dann auch an den besucher übergeben wird
            res.write("Hallo Welt!");

            // Die antwort wird abgeschlossen, indem wir sie mit .end(); beenden, dies schließt den offenen datenstrom zwischen server und client.
            res.end();

            // typisch für einen switch ohne return, benötigen wir einen break;
            break;

            // jetzt können wir im browser ausprobieren ob wir einen antwort bekommen, und sehen auf "http://localhost:3000/" "Hallo Welt!".

        // wir können auch andere daten, als nur text übergeben, zum beispiel json, dafür nutzen wir, als test, den pfad "/json"
        case "/json":
            // wir erstellen eine variable, in der wir etwas stringified json übergeben:
            const jsonTest = JSON.stringify({ hallo: "Welt" });

            // damit wir json ausgeben können, sollten wir den content-type auf application/json ändern.
            res.setHeader("Content-Type", "application/json");

            // innerhalb von res.end(); oder res.write(); können wir jetzt das objekt übergeben:
            res.end(jsonTest);

            break;

        case "/hallo":
            res.end("Hallo");
            break;
    }
});

// damit der server startet, müssen wir dem server sagen, er soll auf einem port erreichbar sein und "zuhören". Sozusagen auf anfragen warten.
// Das kennen wir schon von unserem vscode liveserver, und wenn wir eine react app laufen gelassen haben. Der standardport hierfür im MERN STACK für backend anwendungen ist 3000.

// Wir nutzen die methode .listen(); um den port und optional auch den host anzugeben, falls wir etwas anderes als localhost, also die standartadesse, brauchen, und übergeben im callback ein konsolenstatement, damit wir sehen, das der server läuft.
server.listen(port, () =>
{
    console.log("Der Server läuft auf port " + port);
});
