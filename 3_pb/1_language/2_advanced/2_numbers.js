function divider(input)
{
    const spacer = '='.repeat(20);
    console.log('\n' + spacer, input, spacer, '\n');
}

divider('NUMBERS');

divider('Exponenten');

// Nummern mit exponenten-notation (e + anzahl von nullen)
const exponentExample1 = 50000;
console.log(exponentExample1);

const exponentExample2 = 5e4;
console.log(exponentExample2);

// um eine größere zahl kurz zu schreiben, können wir den exponenten nutzen, indem wir e plus die anzahl an nullen hinter die zahl schreiben.

divider('Strings und nummern kombinieren');

const kombinationsExample1 = 4 + '3';
console.log(kombinationsExample1);

// mit einem plus direkt vor dem string, wandeln wir einen string, der zahlen enthält, in einen integer, also eine nummer, um.
const kombinationsExample2 = 4 + +'3';
console.log(kombinationsExample2);

divider('Strings und nummern umwandeln');

// mit parseInt(); können wir einen string zu einer nummer konvertieren.
const parseExample1 = '25'; 
console.log('String:', parseExample1);
console.log('Int:   ', parseInt(parseExample1));

// Bei kommanzahlen, wird das integer ergebnis (Integer sind ganze zahlen), gerunde auf die nächste ganze zahl.
const parseExample2 = '2.5';
console.log('String:', parseExample2);
console.log('Int:   ', parseInt(parseExample2));

// mit parseFloat(); können wir kommazahlen im string zu dezimalstellenzahlen, oder sogenannten "floats" (floating number) konvertieren.
console.log('Float: ', parseFloat(parseExample2));

console.log('nicht umgewandelt:', 4 + parseExample2);
console.log('umgewandelt:      ', 4 + parseFloat(parseExample2));

divider("Präzision von JavaScript nummern");

// JavaScript nummern sind akkurat bis zur 15. stelle.

console.log("15 stellen:", 999999999999999);
console.log("16 stellen:", 9999999999999999);
console.log("BigInt:    ", BigInt(9999999999999999));

divider("Kommastellen definieren");

// mit der Number methode .toFixed(); können wir entscheiden, wie viele kommastellen eine zahl haben soll. Sie wird dabei in einen String umgewandelt.

// mit parseFloat(); können wir den string wieder in eine nummer umwandeln

const fixedExample1 = 3.14159256;
console.log("2. Kommastellen:", fixedExample1.toFixed(2));
console.log("5. Kommastellen:", parseFloat(fixedExample1.toFixed(5)));

divider("Dividing by Zero");

// NIEMALS durch null teilen. "Keep the universe Safe".
console.log(7 / 0);

divider("Counter iteration");

// mit ++ haben wir eine kurzschreibweise für wert + 1; oder mit -- eine kurzschreibweise für wert - 1

let wurstwasser = 3;

console.log(wurstwasser); // 3

wurstwasser++; // bedeutet counter = counter + 1;

console.log(wurstwasser); // 4

wurstwasser--; // bedeutet counter = counter - 1;

console.log(wurstwasser); // 3

++wurstwasser; // bedeutet counter = 1 + counter;

console.log(wurstwasser); // 4
