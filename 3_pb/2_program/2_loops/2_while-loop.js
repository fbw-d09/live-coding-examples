console.clear();

function divider(input)
{
    const spacer = "=".repeat(20);
    console.log("\n" + spacer, input, spacer, "\n");
}

divider("While");

// Ein while-loop, loopt durch einen code-block, bis die kondition nicht mehr eintrifft.

let i = 0;

while(i < 10)
{
    console.log("i ist", i);
    
    // erhöhe i um 1:
    i++;

    console.log("danach ist i", i);
}

// da wir i erhöhen, und i global angelegt wurde, ist i auch verändert worden:
console.log(i);

// Videospiele nutzen while loops mit einem "true wert" für den "update-loop".
// der jede frame ausgeführt wird
// Bei einem spiel mit 60FPS (frames per second) wird dieser while loop also 50 mal die sekunde ausgeführt.
// im gegensatz zum infinite loop (also einem der unendlich weiter geht) kann der update loop unterbrochen werden.

/**
 * while(true)
 * {
 *      UpdatePlayerPosition();
 *      UpdateEnemyPosition();
 *      UpdateAmmunition();
 *      WaitforKeyPress();
 *      PlayerCredits();
 * }
 */

// wir können mehrere konditionen in einem while-loop checken, oder uns anhand von einem boolean selbst aus dem loop werfen.
let isRunning = true;
let counter = 0;

while(isRunning == true && counter < 10)
{
    console.log("Count: ", counter);

    if(counter === 2)
    {
        isRunning = false;
    }

    counter++;
}

divider("Do/While");

// Bei einem normalen while-loop wird erst geprüft, ob die kondition zutrifft oder nicht, und dann der codeblock ausgeführt.

let counterWhile = 0;
while(counterWhile < 5)
{
    console.log("Der While Counter steht auf ...", counterWhile);

    counterWhile++;
}

console.log("==============");

// Der do/while loop ist eine variante des while-loops, der erst den codeblock ausführt, und danach prüft ob die kondition zutrifft.
// Das folgende beispiel wird also MINDESTENS 1 mal ausgeführt, auch wenn die kondition NICHT zutrifft:
let counterDoWhile = 8;

do
{
    console.log("Der Do/While Counter steht auf...", counterDoWhile);

    counterDoWhile++;
}
while(counterDoWhile < 5);
