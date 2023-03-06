function divider(input)
{
    const spacer = "=".repeat(20);
    console.log("\n" + spacer, input, spacer, "\n");
}

/**
 * IF Statement
 * @description Mit einem if-statement können wir bestimmen, das etwas passiert, wenn ein bestimmter fall eintritt.
 */

divider("1. IF Vergleich");

// variable um die abfrage zu testen
const ergebnis = 5;
const name = "Max";

// das statement das wir abfragen

// wenn (wert kleiner gleich 5)
if(ergebnis <= 5)
{
    // code block anfang

    console.log('ich werde nur angezeigt, wenn das if statement zutrifft!');

    // code block ende
}

// wenn die abfrage zutrifft, wird das console.log(); ausgegeben, wenn nicht, wird der komplette code block ignoriert.

divider("2. If Vergleich mit logischem UND");

// das doppelte & (logisches und) bedeutet, das wir einen wert mit einem anderen vergleichen.
if(ergebnis === 5 && name === "Max")
{
    console.log('Ich werde angezeigt, wenn das ergebnis 5 ist, UND der name "Max" ist');
}

// Nur wenn beides (oder multiples) zutrifft, wird der code block ausgeführt.

divider('3. If vergleich mit logischem ODER');

// das doppelte || (logisches oder) bedeutet, das wir eine wert mit einem anderen vergleichen.
if(ergebnis === 5 || name === "Max")
{
    console.log('Ich werde angezeigt wenn das ergebnis 5 ist, ODER der name "Max" ist.');
}

// als erstes wird geschaut ob die erste abfrage stimmt, sollte dies zutreffen, wird das if statement ausgeführt, wenn nicht, wird geschaut ob die zweite abfrage stimmt, sollte das zutreffen wird das if statement ausgeführt, andernfalls nicht.

console.log("Ich werde immer angezeigt");

// ein beispiel mit booleans
const istKuehlschrankVoll = true;

if(istKuehlschrankVoll === true)
{
    console.log('Heute muss ich nicht einkaufen');
}
