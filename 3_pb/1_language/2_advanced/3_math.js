function divider(input)
{
    const spacer = '='.repeat(20);
    console.log('\n' + spacer, input, spacer, '\n');
}

divider("Die Math library");

// Um die mathe bibliothek zu nutzen, schreiben Math gefolgt von einem punkt, und dem befehl den wir nutzen wollen, so machen wir das mit allen arten von methoden.

// link zur MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

divider("Auf und abrunden");

// Aufrunden / .ceil();
console.log('Aufgerundet:', Math.ceil(2.3));

// Abrunden / .floor();
console.log('Abgerundet: ', Math.floor(2.7));

// Runden / .round();
console.log('Runden:     ', Math.round(2.7));

divider("Zufallsgeneratoren");

// zufallszahl 0-1
console.log("Zufall von 0-1:", Math.random());

// zufallszahl von 0-10, da die 0 die startzahl ist. muss die höchste zahl eins höher als die gewünschte zahl sein.
console.log('Zufall von 0-10:', Math.random() * 11);

// normalerweise schreiben wir einen ganzzahlen zufallsgenerator wie folgt:
const endZahl = 10;
console.log('Zufall von 0-10:', Math.floor(Math.random() * endZahl) + 1);

// Zufallszahlen von einer start zu einer endzahl definieren. (x - y);
const min = 5;
const max = 10;

console.log('von 5 bis 10:', Math.floor(Math.random() * (max - min + 1)) + min);

divider("Maximale und Minimale Zahlen");

// mit Math.max(); können wir uns die größte zahl aus einer reihe von zahlen ausgeben lassen.
console.log('Größte zahl über 0: ', Math.max(1, 3, 5, 2, 7, 9, 0, 4));
console.log('Größte zahl unter 0:', Math.max(-1, -3, -2));
console.log('Größte zahl:        ', Math.max(-1, 4, 2, -2, 3, 0));

// mit Math.min(); können wir uns die kleinste zahl aus einer reihe von zahlen ausgeben lassen.
console.log('Kleinste Zahl:', Math.min(2, 3, 1, 6, 7, -1));

divider("Pi");

console.log('Pi:', Math.PI);

divider("Absoluter unterschied");

console.log(Math.abs(-1.22 - 7.84));

divider("Zahlen abschneiden");

console.log(Math.trunc(13.89));
console.log(Math.trunc(0.123));
console.log(Math.trunc(-2.25));
