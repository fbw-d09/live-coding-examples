console.clear();

function divider(input)
{
    const spacer = "=".repeat(20);
    console.log("\n" + spacer, input, spacer, "\n");
}

divider("Function Return");

// wenn wir in einer funktion etwas auswerten, können wir das ergebnis dieser funktion ausgeben, dies ist ein sogenanntes return statement.

const number1 = 2;
const number2 = 5;

const exampleFunction = function(firstInput, secondInput)
{
    const ergebnis = firstInput + secondInput;

    // mit return übergeben wir einen wert, beim verlassen der funktion
    return ergebnis;

    // dieser code ist nicht erreichbar, da die funktion beim return verlassen wird
    console.log("Hallo Welt!");
}

const funktionsErgebnis = exampleFunction(number1, number2);

console.log(funktionsErgebnis);

// beispiel mit einem if-statement
const checkAge = function(age)
{
    const adultAge = 18;

    if(age >= adultAge)
    {
        return true;
    }
    
    return false;

    // oder return age >= adultAge;
}

const myAge = 45;
const message = "Bist du schon volljährig? " + (checkAge(myAge) ? 'JA!' : "Nein :(");

console.log(message);

// wir können eine funktion mit einem leeren return statement auch direkt unterbrechen:
const tokensLeft = 0;

const playGame = function(tokens)
{
    if(tokens === 0)
    {
        return;
    }

    console.log("Noch ein runde spielen...");
}

playGame(tokensLeft);
