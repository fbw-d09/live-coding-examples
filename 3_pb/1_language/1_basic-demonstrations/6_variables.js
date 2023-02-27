// https://josephcardillo.medium.com/the-difference-between-var-let-and-const-in-javascript-part-2-60fa568d0a0

// var
    var testValue1 = 5;

    // eine var kann redeklariert werden
    var testValue1 = 10;

    // eine var kann geupdated werden
    testValue1 = 20;

// let
    let testValue2 = 5;

    // eine let kann upgedated werden
    testValue2 = 10;

    // eine let kann NICHT redeklariert werden
    let testValue2 = 20;

// Const
    const testValue3 = 5;

    // eine const kann NICHT geupdated werden
    testValue3 = 10;

    // eine const kann nicht redeklariert werden
    const testValue3 = 20;


// Husseins beispiel:
const morgen = 'js';

console.log(morgen);

// ein beispiel für let:
let zahl = 5;

zahl = 8;

console.log(zahl);
