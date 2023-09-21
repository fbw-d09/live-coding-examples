// wir können in nodeJS bestimmte informationen vom system in unsere applikation speisen, dabei hilft uns das "process;" objekt.

// mit process.version; können wir die aktuelle nodejs version auslesen.

console.log("NodeJS Version:", process.version);

if(process.version !== "18")
{
    console.log("Dieses programm läuft erst ab nodejs version 18")
}

// mit process.release; können wir uns weitere informationen der nodejs version holen:
console.log(process.release);

// process.argv; gibt uns den pfad zu nodeJS und der aktuellen datei an, wenn wir dort nichts anderes mitangeben:
console.log(process.argv);
console.log("position, auf der festplatte, wo wir das aktuelle programm ausführen:", process.argv[1]);

// process; komplett:
// console.log(process);

// process.platform; gibt uns das aktuelle betriebssystem aus, auf dem user programm gerade läuft:
console.log("Wir benutzen gerade", process.platform);

// process.arch; gibt uns die architektur des systems aus, auf dem das programm gerade läuft (64 oder 32 bit)
console.log(process.arch);

if(process.arch !== "x64")
{
    console.log("Dieses program läuft nur auf 64 bit betriebssystemen!");
}

console.log("-".repeat(50));

// process.argv; kann auch genutzt werden, um mit dem programm zu interagieren, es agiert dann als schnittstelle zwischen dem terminal, und der applikation, so können wir informationen an die app übergeben, wenn wir sie mit dem programaufruf schrieben, wie bei sass, zb: "sass /inputpfad /outputpfad".

// wenn wir das argv; objekt außeinandernehmen, könenn wir auch auf argumente von der konsole zugreifen, dafür nutzen wir am besten den spread operator, so erstellen wir ein array mit unseren inputs

console.log(process.argv);
        // die datei, die node ausführt
              // die position des aktuell laufenden scripts
                       // die argumente, die mit dem programaufruf übergeben wurden
const [ node, script, ...args ] = process.argv;

// die ersten beiden outputs sind node und script, dir wir schon von oben kennen. Das letzte ist eine sammlung von informationen, die wir übergeben haben. Wenn wir also jetzt die applikation mit argumenten neu starten, bekommen wir diese argumente in dem "args" array zurückggeliefert.
console.log(args);

// mit diesen daten können wir jetzt arbeiten, zb:
if(args[0] === "install" && args[1] === "virus")
{
    console.log("!!!!! INSTALLIERE VIRUS !!!!!")
}
else
{
    console.log("Ich kenne diese kommandos nicht")
}

console.log("-".repeat(50));

// wir können im backend auch auf umgebungsvariablen zugreifen, und eigene schreiben, dies ist besonder shilfreich, wenn wir dynamisch in einem projekt angeben wollen, welchen port unsere applikation hat, oder wenn wir spezielle authentifikationskeys haben, die nur auf dem server existieren. Dafür würden wir eine .env datei nutzen, die wir zu einem späteren zeitpunkt durchgehen werden, diese fügt process.env; weitere variablen hinzu.

// das objekt process.env; gibt uns alle auf dem system gespeicherten informationen aus:
console.log(process.env);

// wie wir sehen werden environment variables (also systemumgebungsvariablen) immer GROß geschrieben, dies ist wichtig, wenn wir bald lernen eigenen projektspezifische ENV's anzulegen.

console.log("-".repeat(50));

// process.env.USERNAME; gibt zum beispiel den aktuell angemeldeten benutzernamen des betriebssystem aus.
console.log(process.env.USERNAME);
// oder
console.log(process.env.USER);

// process.env.HOME; gibt uns den pfad zum Home oder auf dem betriebssystem wieder
console.log(process.env.HOME);

// process.env.PWD; gibt uns den aktuellen ordner aus, auf dem das program läuft
console.log(process.env.PWD);

// process kann auch als event emitter eingesetzt werden:
// das event exit wird ausgeführt wenn das program beenden wird.
// Da das aktuelle programm bis zum ende durchläuft, und dann automatisch beenden wird, sollten wir also  am ende immer unsere konsolen mitteilung stehn haben, die wir gleich angeben.
process.on('exit', code =>
{
    // Der status code 0 bedeutet "clean exit", also "erfolgreicher ausgang", und sagt aus, dass das program erfolgreich alle code zeilen durchlief und dann beenden wurde.
    console.log("beendet mit status code:", code);
});

console.log("lalalalala irgendwas passiert...");

// Direkt vorm ende können wir auch noch beforeExit abfeuern
process.on('beforeExit', code =>
{
    console.log("Dies hier passiert kurz bevor das progamm beendet wird", code);
});
