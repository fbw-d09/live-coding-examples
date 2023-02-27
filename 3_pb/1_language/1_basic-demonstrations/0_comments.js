// Einzeilige kommentare

// Dies ist eine zeile
// nächste zeile ...
// noch eine zeile.

// Ein einzeiliger kommentar, geht immer nur über eine zeile und wird mit zwei schrägstrichen eingeleitet.

// bla sollte man umbennenen.
const bla = 5;

const bla2 = 10; // bla2 sollte man umbennenen

/* Mehrzeiliger kommentar */

/*
    Dies ist ein
    mehrzeiliger kommentar

    wir können ihn so lang machen wie wir wollen...
*/

// Ein mehrzeiliger kommentar wird mit schrägstrich und sternchen eingeleitet, und in der gleichen oder einer der folgenden zeilen mit sternchen und schrägstrich wieder geschlossen.

// JSDoc style kommentare

// JSDoc ist ein npm package, das interaktive und dynamische kommentare zulässt, sie wird per 'npm install -g jsdoc' installiert.

/**
 * Dies ist ein JSDoc
 * Kommentar...
 * 
 */

/**
 * @function testFunction
 * @see https://jsdoc.app/
 * @description Dies ist eine testfunktion
 * @param { string } testWert1 ist ein testparameter
 * @example
 * const output = testFunction("Hallo");
 * console.log(output);
 * @returns { string } 
 */
function testFunction(testWert1)
{
    
}

// Wenn wir jsdoc kommentare als dokumentation ausgeben wollen, können wir mit dem befehl 'jsdoc [Dateiname]' im terminal eine web-seite mit dokumentation automatisch erstellen lassen.
