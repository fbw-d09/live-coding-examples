// Ein Array ist eine Sammlung von Daten, zum Beispiel mehreren Strings, oder Nummern.

const stringArray = [ "ersterWert", "zweiterWert", "dritterWert" ];
const numberArray = [ 15, 25, 18, 7, 5, 5.25, 3.0 ];
const boolArray = [ true, false, false, false, true, false, true, true ];
const mixedArray = [ true, "test", 5, 2.5 ];
const emptyArray = [];

const newArray = new Array(6);

console.log(stringArray);
console.log(numberArray);
console.log(boolArray);
console.log(mixedArray);
console.log(emptyArray);
console.log(newArray);

console.log("=".repeat(50));

// Auf einen wert innerhalb der array zugreifen.
const wertAusStringArray = stringArray[1];

console.log(wertAusStringArray);

console.log("=".repeat(50));

// Die anzahl von elementen in einer liste herausfinden
console.log(boolArray.length);

// Das letzte element aus einer array anzeigen
console.log(numberArray[numberArray.length - 1]);