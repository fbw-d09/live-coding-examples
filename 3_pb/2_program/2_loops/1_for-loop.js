console.clear();

function divider(input)
{
    const spacer = "=".repeat(20);
    console.log("\n" + spacer, input, spacer, "\n");
}

divider('For Loops');

/**
 * Simpler for-loop
 * @description ein for loop lässt uns aktionen beliebig oft wiederholen, und wir können steuern wie oft, oder ob ein zähler übersprungen wird.
 */

// simpler for-loop mit iteration, zeigt den text 5 mal nacheinander an.

let counter = 5;

for(let i = 0; i < counter; i++)
{
    console.log(i, 'Hallo Welt!');
}

// statement 1: let i = 0;          = wird einmal ausgeführt, bevor der codeblock ausgeführt wird, und legt den anfang der itertion fest.
// statement 2: i < counter;        = definiert die kondition zum ausführen und beenden des codeblocks.
// statement 3: i++;                = wird nach jedem durchlauf ausgeführt, und verändert die iterationszahl.

/**
 * Logik:
 * - wo fängt der zähler an? 0
 * - ist die kondition eingetroffen, um zu wiederholen? ist i weniger als 5? ja
 * - wurde der codeblock ausgeführt? wenn ja, erhöhe i um 1, und wiederhole den code block
 */

/**
 * Wir können uns das ganze auch mal zur vereinfachung als tabelle vorstellen:
 * 
 * | Iteration       | Variable     | Kondition         | Aktion             |
 * |-----------------|--------------|-------------------|--------------------|
 * | 1               | i = 0        | 0 < 5 === true    | console.log(...);  |
 * | 2               | i = 1        | 1 < 5 === true    | console.log(...);  |
 * | 3               | i = 2        | 2 < 5 === true    | console.log(...);  |
 * | 4               | i = 3        | 3 < 5 === true    | console.log(...);  |
 * | 5               | i = 4        | 4 < 5 === true    | console.log(...);  |
 * | 6               | i = 5        | 5 < 5 === false   | break;             |
 */

divider('Ein weiters beispiel');

// wir können unsere variable i, die wir innerhalb des loops angelegt haben, auch nur innerhalb des code blocks unserer for schleife nutzen.

// wenn wir im dritten statement das zweite + mit einem gleich, gefolgt von einer zahl ersetzen, können wir schritte überspringen.
for (let i = 0; i < counter; i+=2)
{
    console.log(`Iteration: ${ i + 1}`);    
}

divider('for loop unterbrechen');

// wir können einen for-loop auch anhand von bestimmten konditionen unterbrechen.

counter = 20;
const breakpoint = 11;

for(let i = 0; i < counter; i++)
{
    if(i == breakpoint)
    {
        // mit break; können wir, genau wie in switches, einen loop unterbrechen.
        break;
    }

    if(i == 4)
    {
        i = 5;
        // mit continue; kann ein durchlauf übersprungen werden.
        continue;
    }
    
    console.log(`Durchlauf nummer ${i}`);
}

// wir können auch mehrere for-loops ineiander verschachteln, um beispielsweise eine tabelle mit rows und cols zu füllen.
// meist nehmen wir nicht mehr als 2 for loops ineinander verschachtelt, hier wäre im ersten vor loop i der iterator, und im zweiten j.

const rows = 2; // so oft führen wir den ersten for loop aus.
const columns = 3; // so oft führen wir den zweiten for loop aus, wenn er aufgerufen wird.

console.log('\nEinfacher verschachtelter loop:\n')

for(let i = 0; i < rows; i++)
{
    for(let j = 0; j < columns; j++)
    {
        console.log('row', i + 1, "column", j + 1);
    }
}

console.log('\nTabellenbeispiel:\n')

// rows
for(let i = 0; i < rows; i++)
{
    let ausgabe = "|";

    // // columns
    for(let j = 0; j < columns; j++)
    {
        ausgabe += ` ${ j + 1} |`;
    }

    console.log(`${i + 1}: ${ausgabe}`);
}

divider('Unendlicher Loop');

// ein undlicher loop wird so lange laufen, bis der speicher voll ist, und sollte deswegen niemals ausgeführt werden!

// for(let i = 1; i > 0; i++)
// {
//     console.log('Bis zur unendlichkeit und noch viel weiter!', i);
// }
