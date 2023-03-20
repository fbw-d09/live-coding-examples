console.clear();

function divider(input)
{
    const spacer = "=".repeat(20);
    console.log("\n" + spacer, input, spacer, "\n");
}

divider("Function Simple");

// Eine simple funktion
// functon showMessage()
// {
//      console.log("Hallo Welt!");
// }

// eine alternative schreibweise
// const showMessage = function()
// {
//      console.log("Hallo Welt!");
// }

const showMessage = function()
{
    console.log("Hallo Welt!");
}

// damit der codeblock einer funktion ausgeführt wird, machen wir einen sogenannten "function call", andernfalls wird der code nicht ausgeführt.

const darfAusführen = true;

if(darfAusführen)
{
    showMessage();
}

showMessage();

// eine funktion kann sich auch selbst starten, das nennt man dann eine selbstausführende fuktion, dies können wir erreichen indem wir hinter den code block der funktion klammern setzen.

// etwas mehr info hierzu: https://www.mediaevent.de/javascript/self-executing-functions.html

const selfExecutingFunction = function ()
{
    console.log("ich habe mich selber ausgeführt!");
}();
