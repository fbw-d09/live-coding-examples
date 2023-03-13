console.clear();

function divider(input)
{
    const spacer = "=".repeat(20);
    console.log("\n" + spacer, input, spacer, "\n");
}

divider("Functions variables");

divider("lokale variablen");

// Eine variable die wir innerhalb einer funktion / eines code-blockes anlegen, nennt sich lokale variable und ist nur in diesem code-block nutzbar, oder verfügbar.

const showMessage = function()
{
    const message = "Ich bin eine lokale variable";

    console.log(message);
}

showMessage();

divider("globale variablen");

// eine funktion kann aber auf externe variablen zugreifen UND kann diese auch verändern.
let username = "Max";

const welcomeMessage = function()
{
    username = "John";

    // console.log(2, username);
}

console.log("vorher", username);

welcomeMessage();

console.log("nachher", username);

divider("variablenklone");

// innerhalb von funktionen könne wir die gleichen variablennamen nutzen, wie ausserhalb, da wir innerhalb der funktion so eine lokale variable erstellen
const value = 5;
console.log("value", value);

const changeValue = function()
{
    const value = 10;
    console.log("value", value);
}

changeValue();

console.log("value", value);
