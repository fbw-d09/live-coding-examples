const divider = (methodName) =>
{
    console.log("\n" + "=".repeat(25) + " ." + methodName +"(); " + "=".repeat(25));
}

divider("concat");

/**
 * @method .concat();
 * @description 
 * Mit .concat(); können wir, genau wie bei Strings mehrere werte zusammenfügen und in einer neuen Array Speichern.
 * @example
 * [ firstArray ].concat([ secondArray ]);
 * @example
 * [ firstArray ].concat([ secondArray ], [ thirdArray ]);
 * @returns { array }
*/
const arrayOne = [ "A", "B", "C" ];
const arrayTwo = [ 1, 2, 3 ];
const arrayThree = [ true, true, false ];

const arrayComplete = arrayOne.concat(arrayTwo, arrayThree);

console.log("arrayOne[], arrayTwo[] und arrayThree[] zusammengefügt:");
console.log(arrayComplete);

divider("indexOf");

/**
 * @method .indexOf();
 * @description 
 * Die Methode .indexOf(); gibt den ersten index zurück, der auf eine prüfung positiv reagiert. Ein rückgabewert von -1 bedeutet das die prüfung negativ verlief.
 * @example
 * [ array ].indexOf(wert);
 * @example
 * [ array ].indexOf(wert, startIndex);
 * @returns { number }
 */
const colors = [ "red", "green", "orange", "blue", "yellow", "pink" ];

const findColor1 = colors.indexOf("green");
console.log("position von green: " + findColor1);

const findColor2 = colors.indexOf("purple");
console.log("position von purple: " + findColor2);

const findColor3 = colors.indexOf("blue", 4);
console.log("position von blue: " + findColor3);

divider("includes");

/**
 * @method .includes();
 * @description 
 * Die Methode .includes(); sucht einen wert in der array und gibt einen boolean zurück, der aussagt ob dieser wert gefunden wurde.
 * @example
 * [ array ].includes(wert);
 * @example
 * [ array ].includes(wert, startIndex);
 * @returns { boolean }
 */
const positionColor1 = colors.includes("green");
console.log("green gefunden: " + positionColor1);

const positionColor2 = colors.includes("purple");
console.log("purple gefunden: " + positionColor2);

const positionColor3 = colors.includes("blue", 4);
console.log("blue gefunden: " + positionColor3);

divider("map");

/**
 * @methode .map();
 * @description
 * Die Methode .map(); erstellt eine neue array und befüllt diese mit den Daten
 * die nach der ausführung der callback funktion mit jedem element der array zurückkommen.
 * @example
 * [ array ].map(function(wert) {});
 * @example
 * [ array ].map(function(wert, index) {});
 * @returns { array }
 */
const numbers = [ 8, 16, 32, 64, 128, 256 ];

console.log("vorher: ", numbers);

const newNumberList = numbers.map(number =>
{
    return number * 2;
});

// const newNumberList = numbers.map(number => number * 2);
// const newNumberList = numbers.map(function(number)
// {
//     return number * 2;
// });

console.log("jeder wert in numbers[] multipliziert mit 2: ");
console.log(newNumberList);
console.log("nachher: ", numbers);

/**
 * Warum nutzen wir map anstelle von foreach?
 * Die foreach methode liefer undefined zurück, da wir die daten der array innerhalb der schleife nutzen.
 * Die .map(); methode gibt uns im gegensatz dazu eine array zurück.
 */
console.log("vorher: ", numbers);
const newNumberList2 = numbers.forEach(number =>
{
    return number * 2;
});
console.log("nachher: ", numbers);

console.log(newNumberList2);

divider("filter");

/**
 * @methode .filter();
 * @description
 * Die Methode .filter(); filtert die inhalte der array anhand der callback funktion und gibt uns eine neue array aus, befüllt mit den positiv bewerteten elementen.
 * @example
 * [ array ].filter(function(wert) {});
 * @example
 * [ array ].filter(function(wert, index) {});
 * @returns { array }
 */
const drinks = [ "coffee", "tea", "cola", "fanta", "sprite", "wine", "wodka" ];

const newDrinkArray = drinks.filter(drink =>
{
    return drink[0] === "w";
});

console.log("elemente in drinks[] die mit w anfangen:");
console.log(newDrinkArray);

divider("reduce");

/**
 * @methode .reduce();
 * @description
 * Die Methode .reduce(); reduziert die inhalte der Array auf einen einzigen wert,
 * indem es zwei elemente (von link nach rechts) durch eine funktion vergleicht und reduziert.
 * Zum beispiel um die summe oder den durchschnitt von werten in einer array zu finden.
 * @example
 * [ array ].reduce(function(wert1, wert2));
 * @example
 * [ array ].reduce(function(wert1, wert2) {}, initialWert);
 * @returns { number }
 */
const someNumberArray = [ 12, 22, 8, 6, 7 ];

/* 
Logik:
| Iteration | Variablen                         | Aktion                   | Ergebnis |
|-----------|-----------------------------------|--------------------------|----------|
| 1         | firstValue = 12, secondValue = 22 | firstValue + secondValue | 34       |
| 2         | firstValue = 34, secondValue = 8  | firstValue + secondValue | 42       |
| 3         | firstValue = 42, secondValue = 6  | firstValue + secondValue | 48       |
| 4         | firstValue = 48, secondValue = 7  | firstValue + secondValue | 55       |
*/
const sumOfSomeNumberArray = someNumberArray.reduce((firstValue, secondValue) =>
{
    return firstValue + secondValue;
});

console.log("summe aller zahlen in someNumberArray[]: ", sumOfSomeNumberArray);

const arrayOfNumbers = [ 5, 8, 7, 11, -6 ];

/*
Logik:
| Iteration | Variablen                         | Aktion  | Ergebnis |
|-----------|-----------------------------------|---------|----------|
| 1         | firstValue = 4, secondValue = 5   | 4 > 5   | 5        |
| 2         | firstValue = 5, secondValue = 8   | 5 > 8   | 8        |
| 3         | firstValue = 8, secondValue = 7   | 8 > 7   | 8        |
| 4         | firstValue = 8, secondValue = 11  | 8 > 11  | 11       |
| 5         | firstValue = 11, secondValue = -6 | 11 > -6 | 11       |
*/
const highestNumber = arrayOfNumbers.reduce((firstValue, secondValue)=>
{
    if(firstValue > secondValue)
    {
        return firstValue;
    }
    else
    {
        return secondValue;
    }
}, 4);

console.log("Höchste Zahl in arrayOfNumbers[]: ", highestNumber);

/**
 * @method .find();
 * @description
 * Die Methode .find(); gibt den wert des ersten gefundenen elementes in der array zurück.
 * Wenn kein eintrag gefunden wurde, bekommen wir undefined zurück.
 * @example
 * [ array ].find(function(wert, index) {});
 * @returns { string }
 */
const languages = [ "Turkish", "Greek", "German", "Spanish", "Russian" ];

const findLanguages = languages.find((language, i) => 
{
    return language === "Spanish";
});

console.log("Gesuchte sprache gefunden in languages[]: ", findLanguages);

const numbersList = [ -1, -2, -5, 20, 10, 25, 80 ];

divider("every");

/**
 * @method .every();
 * @description
 * Die Methode .every(); überprüft ob jedes element in der Array einer kondition entspricht, und gibt false zurück, falls ein wert fehlschlägt.
 * @example
 * [ array ].every(function(wert) {});
 * @returns { boolean }
 */
const everyCheck = numbersList.every(number =>
{
    return number > 0;
});
console.log("jeder wert in numbersList[] ist größer als 0: ", everyCheck);

divider("some");

/**
 * @method .some();
 * @description
 * Die Methode .some(); ist das gegenteil von .every(); und gibt true zurück, sobald ein wert positiv getestet wurde.
 * @example
 * [ array ].some(function(wert) {});
 */
const someCheck = numbersList.some(number =>
{
    return number > 0;
});
console.log("ein oder mehrere werte in numbersList[] sind größer als 0: ", someCheck);
