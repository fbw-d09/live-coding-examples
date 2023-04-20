// Die zweite art, mit der konsole zu interagieren ist, dem user zu erlauben, w#hrend der laufzeit der applikation fragen zu beantworten, falls jemand von euch schon einmal npm init ausgeführt hat, kennt er diese art der eingabe. wir starten die app und im terminal werden uns fragen gestellt, wie "wo soll das programm installiert werden" oder "wie heisst der author", das programm erfragt also daten, während es läuft, und wertet diese aus.

// ein paar beispiele für die implementation der zweiten technik in ein spieleprojekt:

// "Welches pokemon möchtest du in den kampf schicken?"     => Der spieler schreibt den namen des pokemons, woraufhin die app dann im "vorhandenePokemons" array prüft, ob der spieler das angefragte pokemon besitzt, und es dann in die variable "selektiertesPokemon" speichert.
// "Wieviel gold bist du bereit für das schwert auszugeben?" => Der spieler gibt einen wert ein, den er bereit ist dem händler für das schwert zu geben, überschreitet die eingabe den "schmerzgrenzenswert" des händlers, bekommt der spieler das schwert in sein inventarArray übergeben.
// passend zu der oberen frage, könnte man in der frage selbst auch zum beispiel in klammern dahinter schreiben, wieviel gold der spieler gerade überhaupt besitzt.

// Die erklärungen und beispiele hier fallen kürzer aus, als im vorherigen thema, da wir eine vorhandene bibliothek (readline) benutzen, und fast ausschließlich dessen methode nutzen. Das ist genau das, was ich schon einmal erklärt habe, wie wir in SPA arbeiten. Wir nutzen vorhandene bibliotheken, und deren methoden, wissen aber die LOGIK vie im hintergrund passiert, durch unser JS wissen.

// Interaktive fragen mit readline

// als erstes importieren wir das modul "readline", das teil von nodeJS ist.
const readline = require('readline');

// wir erstellen ein neues readline interface (eine schnittstelle unserer app, mit dem input und output der konsole)
//                                 konsolen input, konsolen output
const rl = readline.createInterface(process.stdin, process.stdout);

// mit der methode .cursorTo(); setzen wir unseren cursor in der konsole an die gewünschte stelle (links oben, also ist erste zahlenwert horizontal, und der zweite vertikal)
readline.cursorTo(process.stdout, 0, 0);

// mit der methode .clearScreenDown(); löschen wir den inhalt des terminals ab der position an der wir uns befinden.
readline.clearScreenDown(process.stdout);

// mit der interface methode .write(); können wir text in der konsole ausgeben (wir können auch console.log(); benutzen);
rl.write("Willkommen!\n");

// mit der callback methode .question(); stellen wir im terminal fragen an den benutzer:
//          frage,                                       wert der antwort
rl.question("Wieviele flaschen milch hast du gekauft? ", (anzahl) =>
{
    // wenn wir uns mit .cursorTo(); in eine zewile bewegen können wir den inhalt dort auch wieder überschreiben. Wir bewegen uns in die erste zeile und...
    readline.cursorTo(process.stdout, 0, 0);

    // ... löschen mit der methode .clearLine(); den text in der zeile
    readline.clearLine(process.stdout);

    // und setzen den output dort ein:
    console.log(`Du hast ${ anzahl } flaschen milch gekauft`);

    // da wir asynchrone programmierung noch nicht gelernt haben, müssen wir weitere fragen innerhalb des callbacks der vorherigen frage stellen, dies wird unter umständen zu sehr großen callback bäumen führen, das ist in unserem aktuellen projekt aber nicht schlimm, und kann später, wenn wir async/await gelernt haben, ja noch verbessert werden.

    rl.question("Wieviele flaschen milch hast du davon bereits getrunken?", (getrunken) =>
    {
        // da wir uns mit der .cursorTo(); methode an eine beliebige stelle im terminal bewegen können, setzen wir unser ergebnis 2 zeilen tiefer in zeile 3.
        readline.cursorTo(process.stdout, 10, 3);

        const uebrig = anzahl - getrunken;

        if(uebrig === 1)
        {
            console.log(`Du hast noch eine flasche übrig`)
        }
        else
        {
            console.log(`Du hast noch ${uebrig} flaschen übrig.`);
        }

        // am ende schließen wir die schnittstelle und beenden so unseren input und das programm:
        rl.close();
    });
});
