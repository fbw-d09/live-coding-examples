console.clear();

function divider(input)
{
    const spacer = "=".repeat(20);
    console.log("\n" + spacer, input, spacer, "\n");
}

divider("Function Parameters");

// Um daten und werte an eine funktion zu übergeben, können wir diese als parameter festlegen, und dann mit dem funktionsaufruf übergeben. Dabei erstellen wir eine lokale variable, die den übergebenen wert beinhaltet.

                          // Parameter
const showMessage = function(text)
{
    // wir nutzen den übergebenen wert von "text" und arbeiten mit ihm.
    console.log(text.toUpperCase());
}

// beim funktionsaufruf fügen wir den gewollten wert ein.
showMessage("Ich bin eine Nachricht");
showMessage("Ich bin noch eine Nachricht");
showMessage("Ich bin eine nachricht aus dem weltall");

// wir können auch beliebig viele werte an eine funktion übergeben, wenn wir diese mit einem komma trennen.
//                               user, message
const chatMessage = function(benutzer, nachricht)
{
    // auf die übergebenen werte können wir zugreifen, und sie auch ändern:
    benutzer = "====> " + benutzer;

    console.log(benutzer, ':', nachricht);
}

divider("Chatbeispiel");

let user = "Max";
let message = "Hallo, wie geht es dir?";

// gibt an: benutzer und nachricht
chatMessage(user, message);

user = "Hansi";
message = "Ach mit geht es prima! ich esse grad";

chatMessage(user, message);

chatMessage("Jana", "Ich bin gerade fertig mit essen :)");

user = "Pawel";
message = "Was gab es denn?";

chatMessage(user, message);

divider("Defaultwerte");

// mit sogenannten default values können wir werte festlegen, die für variablen genutzt werden, bei denne wir keinen wert übergeben. Das funktioniert, bei mehreren parametern, nur mit dem letzten.
const chatMessageDefault = function(user, message = "Der user hat nichts geschrieben")
{
    // theoretisch steht hier: message = message || "Der user hat nichts geschrieben";
    console.log(user, ":", message);
}

user = "Yan";

chatMessageDefault(user);
chatMessageDefault(user, "Der user hat etwas geschrieben");

message = "Hallo, javascript ist cool!";

chatMessageDefault(user, message);

divider("rekusive funktion");

// eine funktion kann sich selber, auch innerhalb des eigenen code blockes aufrufen.
const countDown = function(number)
{
    if(number === 0)
    {
        // die funktion verlassen und etwas ausgeben, hier "nichts"
        return;
    }
    console.log(number);

    countDown(number - 1);
}

let testNummer = 5;
let andereNummer = 10;

countDown(testNummer);
countDown(andereNummer);
countDown(14);


