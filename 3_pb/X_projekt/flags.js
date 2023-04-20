// Es gibt 2 arten von interaktion mit javascript applikationen in der konsole

// Die erste art ist argumente zum start der appliaktion zu übergeben, das kennen wir zb von nodemon, wo wir schreiben "nodemon" und dann den dateienamen übergeben, von der datei die wir überwachen wollen, oder die flagge -q, um die ausgabe zu verkürzen. Mit dieser art von applikationsaufruf können wir also zum start konfigurationen übergeben, oder werte angeb en die wir zum start benötigen, oder bereitstellen wollen.

// ein paar beispiele für die implementation von dieser technik in ein spieleprojekt:

// -n Gandalf | --name Gandalf => Der name des spielers
// -g 3000    | --gold 3000    => Die menge an gold, mit der der spieler das spiel anfängt
// -ts 3      | --teamsize 3   => DIe menge an erlaubten pokemon, die der spieler mit sich führen kann
// -r         | --random       => generiert eine zufällige zahl, auf der basierend der spielverlauf entschieden wird
// -d         | --day          => das spiel spielt zur tageszeit
// -n         | --night        => das spiel spielt zur nachtzeit

// Flaggen

// Um eine app zu schreiben die argumente annimmt, die beim start ausgewertet werden, nutzen wir das vorgebenene systemArray process.argv der NodeJS systembibliothek.

// wenn wir die applikation einfach so starten, ohne argumente einzugeben, bekommen wir 2 einträge in dem process.argv array.

console.log(process.argv);

// die beiden einträge sind die position des lokal installierten nodejs, und der ordner in dem wir gerade die applikation ausführen.

// starten wir die app jetzt mit einem argument hinter dem dateinamen, bekommen wir mehr einträge im array zurück:

// BEISPIELEINGABE: node flags.js testargument

// wenn wir unsere app immer mit argumenten ausführen wollen,
// können wir unser wissen. über die länge des erwähnten arrays nutzen,
// um das programm wegen fehlender argumente automatisch zu beenden.

if(process.argv.length === 2)
{
    console.log("Es wurden keine argumente übergeben! Tschüssi...");
    // mit der methode .exit(); können wir unsere applikation beenden, dafür übergeben wir den wert 1 für true an die methode.
    process.exit(1);
}

// meist nutzen terminal applikationen (sogenannte cli's - command line interfaces, also schnittstellen der konsole mit einer applikation) sogenannte "flags",
// flags sind buchstaben oder logische worte wie -f, sowie --file für die angabe von dateien, oder -v oder --version für die anzeige der aktuellen version der app.

// wir müssen prüfen, ob die erwünschte flagge existiert, um sie zu nutzen.
const versionFlag = process.argv.indexOf("--version");

// wenn der .indexOf(); wert von unserer anfrage über -1 liegt, also existiert, dann gib bitte die version der app aus:
if(versionFlag > -1)
{
    console.log("v1.0.0");

    // nach informationsanfragen, wie einer version, beenden wir das programm:
    process.exit(1);
}

// BEISPIELEINGABE: node flags.js --version

// wolen wir per flagge daten übergeben, müssen wir prüfen ob die flagge existiert, und den darauf folgenden wert übergeben:
const usernameFlag = process.argv.indexOf("--username");

// wir erstellen eine leere variable, um dort den usernamen zu speichern, falls er angegeben wird.
let username;

if(usernameFlag > -1)
{
    // wir können als angabe für den wert, den wir haben wollen einfach den nächsten eintrag im process.argv array (also den nächsten eingabetext) verwenden, wir gehen also an die position des letzten geprüften flags, plus 1: (DIe logik dafür, können wir auch in der ausgabe des arrays sehen)
    username = process.argv[usernameFlag + 1];
}

// BEISPIELEINGABE: node flags.js --username Rick

// wenn username NICHT undefined ist, also die eingabe geklappt hat, geben wir ihn aus:
if(username !== undefined)
{
    console.log(username);
}

// wenn wir den usernamen nicht übergeben haben, wird die konsole einfach nicht ausgegeben.

// als test übergeben wir noch eine weitere flagge:
const passwordFlag = process.argv.indexOf("--password");

let password;

if(passwordFlag > -1)
{
    password = process.argv[passwordFlag + 1];
}

// jetzt vergliechen wir als mockup die werte von username und password um den user zu authentifizieren:
if(username === "Rick" && password === "1234")
{
    console.log(`User ${ username } wurde erfolgreich eingeloggt!`);
}
else
{
    console.log("DU KOMMST HIER NICHT REIN!");
}

// BEISPIELEINGABE: node flags.js --username Rick --password 1234

// wir sehen das der user authentifiziert wurde, und das wir mit den übergebenen werten machen können was wir wollen.

// übrigens, da wir spezifisch nach flaggen suchen, und dadurch die reihenfolge egal ist, würde, wenn wir jetzt die versionsabfrage wieder ausführen, das programm die version anzeigen, aber den rest ignorieren.

// BEISPIELEINGABE: node flags.js --username Rick --password 1234 --version

// bonus: als vereinfachung der prüfung, können wir auch eine funktion schreiben, die true oder false zurückgibt, im falle das ein flag existiert oder nicht.
const doesFlagExist = (flag) => process.argv.indexOf(flag) > -1 ? true : false;

// wir testen ob wir bei unserer bisherigen eingabe true zurück bekommen:
console.log(doesFlagExist("--username"));

// BEISPIELEINGABE: node flags.js --username Rick

// so können wir auch auf mehrere flaggen auf einmal prüfen, und unsere abkürzung, sowie die ausgeschriebene flagge gemeinsam prüfen
if(doesFlagExist("-h") || doesFlagExist("--help"))
{
    console.log("Dies ist die hilfsdokumentation der app");
}

// BEISPIELEINGABE: node flags.js -h
// BEISPIELEINGABE: node flags.js --help

// auf diese weise lässt sich natürlich auch eine fuktion erstellen, um den entsprechenden wert der flag zu bekommen:
const getFlagValue = (flag) =>
{
    // wir speichern entweder die position des wertes oder undefined:
    const flagPosition = process.argv.indexOf(flag) > -1 ? process.argv.indexOf(flag) : undefined;

    // returne entweder den wert oder undefined (undefined + 1 ist immernoch undefined)
    return process.argv[flagPosition + 1];
}

const currentDay = getFlagValue("-d") || getFlagValue("--day");

if(currentDay)
{
    console.log(`Heute ist ${currentDay}`);
}

const selectedCar = getFlagValue("-c") || getFlagValue("--car");

if(selectedCar)
{
    console.log(`Heute fahren wir ${ selectedCar }`);
}

const firstNumber = getFlagValue("-f")  || getFlagValue("--first");
const secondNumber = getFlagValue("-s") || getFlagValue("--second");

if(firstNumber && secondNumber)
{
    console.log(parseInt(firstNumber) + parseInt(secondNumber));
}

// BEISPIELEINGABE: node flags.js -d montag
