console.clear();

// function divider(input)
// {
//     const spacer = "=".repeat(20);
//     console.log("\n" + spacer, input, spacer, "\n");
// }

// unser divider als arrow function:
const divider = (input) =>
{
    const spacer = "=".repeat(20);
    console.log("\n" + spacer, input, spacer, "\n");
}

divider("Arrow Function");

// const beispielFunktion = function() { ... }
// function beispielFunktion() { ... }
// const beispielFunktion = () => {}

// bei einem simplen kommando innerhalb der funktion, kann ma ndie klammern auch weglassen, und den code so angenehm verkürzen.
// function divider()
// {
//     console.log("=".repeat(50));
// }

// const divider = () => console.log("=".repeat(50));

divider("Automated return");

// Eine arrow function mit nur einem statement hat automatisch einen rückgabewert, und benötigt dafür keinen return.
// function returnText()
// {
//     return "Hello World";
// }

const returnText = () => "Hello World";

const returnNumber = () => 5 + 7;

console.log(returnText());
console.log(returnNumber());

divider("werte übergeben");

// einer arrow function können wir genau wie einer normalen funktion werte übergeben:
// function showMessage(userName)
// {
//     console.log("Hallo, " + userName);
// }

showMessage = userName => console.log("Hallo, " + userName);

showMessage("Max");

// bei einer arrow function mit nur einem paramter, können wir uns die klammern sparen:

// funktionsName    parameter   code-block
// showMessage =    userName => console.log("Hallo," + userName)

testFunction = (userName, testNummer) => console.log(userName, "bla...", testNummer);
testFunction("Max", 14);

const testFunction2 = (number1, number2) =>
{
    const ergebnis = number1 + number2;
    
    return ergebnis + 5;
}

const returnErgebnis = testFunction2(2, 4);
console.log(returnErgebnis);
